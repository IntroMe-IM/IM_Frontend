import React, { useState } from "react";
import classes from "../Common/Layout.module.css";
import cancleButton from "../Icon/cancleButton.png";
import createButton from "../Icon/createButton.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const CreateProject = () => {
  const [name, setName] = useState("");
  const [project, setProject] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleProjectChange = (e) => {
    setProject(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const member = JSON.parse(localStorage.getItem("member"));
    const ownerId = member ? member.id : null;

    const data = {
      name,
      project,
      description,
      image: "", // 이미지에 대한 입력 필드가 없다면 비워두거나 기본값을 사용합니다.
      owner: ownerId,
    };

    try {
      const response = await axios.post("https://introme.co.kr/v1/team/build", data, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      if (response.status === 200) {
        // 요청이 성공하면 페이지를 이동합니다.
        navigate("/TeamSpace");
        alert("프로젝트가 성공적으로 생성되었습니다.");
      }
    } catch (error) {
      console.error("Error creating project:", error);
      alert("프로젝트 생성 중 오류가 발생했습니다.");
    }
  };

  return (
    <>
      <div className={classes.createProjectLayout}>
        <form onSubmit={handleSubmit}>
          <p
            style={{
              marginTop: "5vh",
              margin: "5vh",
              fontSize: "1.5rem",
              fontWeight: "bold",
            }}
          >
            새 프로젝트
          </p>
          <div style={{ margin: "4vh" }}>
            <input
              placeholder="팀명 입력"
              value={name}
              onChange={handleNameChange}
              style={{
                border: "none",
                borderBottom: "1px solid black",
                background: "none",
                boxShadow: "none",
                outline: "none",
                width: "calc(100% - 30px)",
                padding: "0.5rem",
              }}
            />
          </div>
          <div style={{ margin: "4vh" }}>
            <input
              placeholder="프로젝트명 입력"
              value={project}
              onChange={handleProjectChange}
              style={{
                border: "none",
                borderBottom: "1px solid black",
                background: "none",
                boxShadow: "none",
                outline: "none",
                width: "calc(100% - 30px)",
                padding: "0.5rem",
              }}
            />
          </div>

          <div style={{ margin: "4vh" }}>
            <textarea
              placeholder="프로젝트를 설명해주세요!"
              value={description}
              onChange={handleDescriptionChange}
              style={{
                border: "none",
                borderBottom: "1px solid black",
                background: "none",
                boxShadow: "none",
                outline: "none",
                width: "calc(100% - 30px)",
                padding: "0.5rem",
                minHeight: "30vh",
                maxHeight: "30vh",
                resize: "none",
                overflowY: "hidden",
              }}
            ></textarea>
          </div>
          <div style={{ display: "grid", placeItems: "center" }}>
            <button type="submit" style={{ border: "none", background: "none" }}>
              <img src={createButton} style={{ margin: "1vh" }} alt="생성 버튼" />
            </button>
            <Link to="/TeamSpace">
              <img src={cancleButton} alt="취소 버튼" />
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateProject;
