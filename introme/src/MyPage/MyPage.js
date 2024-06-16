import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import NavBar from "../Common/NavBar";
import MyPageInfo from "./MyPageInfo";
import classes from "./MyPage.module.css";
import { SketchPicker } from 'react-color';
import mypagebanner from "../Icon/mypagebanner.png";
import mypageIcon1 from "../Icon/mypageIcon1.png";
import mypageIcon2 from "../Icon/mypageIcon2.png";
import mypageIcon3 from "../Icon/mypageIcon3.png";
import mypageIcon4 from "../Icon/mypageIcon4.png";
import mypageIcon5 from "../Icon/mypageIcon5.png";
import mypageIcon6 from "../Icon/mypageIcon6.png";

const MyPage = () => {
  const [memberInfo, setMemberInfo] = useState(null);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [selectedColor, setSelectedColor] = useState("#262626");
  const colorPickerRef = useRef(null);

  const mypageIcons = [
    mypageIcon1,
    mypageIcon2,
    mypageIcon3,
    mypageIcon4,
    mypageIcon6,
  ];

  const navigate = useNavigate();

  useEffect(() => {
    const fetchMemberData = async () => {
      const member = JSON.parse(localStorage.getItem("member"));
      const memberId = member?.id;

      if (!memberId) {
        console.error("Member ID not found");
        return;
      }

      try {
        const response = await axios.get(`https://introme.co.kr/v1/card/${memberId}`);
        setMemberInfo(response.data);
        if (response.data && response.data.backgroundColor) {
          setSelectedColor(response.data.backgroundColor);
        }
      } catch (error) {
        console.error("Error fetching member data:", error);
      }
    };

    fetchMemberData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("member");
    navigate("/LoginPage");
  };

  const formatPhoneNumber = (phoneNumber) => {
    if (!phoneNumber) return "";
    return phoneNumber.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3");
  };

  const handleColorChange = (color) => {
    const newColor = color.hex;
    setSelectedColor(newColor);
    const updatedMemberInfo = { ...memberInfo, backgroundColor: newColor };
    setMemberInfo(updatedMemberInfo);
    localStorage.setItem("member", JSON.stringify(updatedMemberInfo));
  };

  const handleClickOutside = (event) => {
    if (colorPickerRef.current && !colorPickerRef.current.contains(event.target)) {
      setShowColorPicker(false);
    }
  };

  useEffect(() => {
    if (showColorPicker) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showColorPicker]);

  const toggleColorPicker = () => {
    setShowColorPicker(!showColorPicker);
  };

  const handleSave = async (editableInfo) => {
    const memberId = memberInfo.id;
    try {
      const response = await axios.put(`https://introme.co.kr/v1/card/${memberId}`, {
        name: editableInfo.name,
        description: editableInfo.description,
        company: editableInfo.company,
        color: selectedColor
      });
      alert("Information updated successfully");
      setMemberInfo(response.data);
      localStorage.setItem("member", JSON.stringify(response.data));
    } catch (error) {
      console.error("Error updating member information:", error);
      alert("Failed to update information");
    }
  };

  return (
    <>
      <div className={classes.MyPageLayout}>
        <div
          style={{
            borderBottom: "1px solid black",
            height: "17vh",
            width: "95%",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "#4755D7",
              width: "13vh",
              height: "13vh",
              marginLeft: "2.5vh",
              borderRadius: "17%",
            }}
          ></div>
          <div
            style={{
              height: "10vh",
              marginLeft: "2vh",
            }}
          >
            <div
              style={{
                fontWeight: "bold",
                margin: "0.5vh",
                fontSize: "1.3rem",
              }}
            >
              {memberInfo && memberInfo.name}
            </div>
            <div
              style={{
                margin: "0.5vh",
                fontSize: "1rem",
              }}
            >
              {memberInfo && memberInfo.email}
            </div>
          </div>
        </div>

        <MyPageInfo
          memberInfo={memberInfo}
          formatPhoneNumber={formatPhoneNumber}
          onClick={toggleColorPicker}
          backgroundColor={selectedColor}
          onSave={handleSave}
        />

        {showColorPicker && (
          <div className={classes.ColorPickerModal} ref={colorPickerRef}>
            <SketchPicker
              color={selectedColor}
              onChange={handleColorChange}
            />
          </div>
        )}

        <img
          src={mypagebanner}
          style={{ margin: "0 auto", width: "80%", marginTop: "1.5vh" }}
        />

        {mypageIcons.map((icon, index) => (
          <img
            key={index}
            src={icon}
            style={{ margin: "1vh" }}
            alt={`Icon ${index + 1}`}
          />
        ))}
        <img
          src={mypageIcon5}
          onClick={handleLogout}
          style={{ margin: "1vh", cursor: "pointer", marginBottom: "10vh" }}
          alt="Logout Icon"
        />
        <NavBar />
      </div>
    </>
  );
};

export default MyPage;
