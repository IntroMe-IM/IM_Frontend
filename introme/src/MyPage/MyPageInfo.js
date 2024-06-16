import React, { useState, useEffect } from "react";
import axios from "axios";
import classes from "./MyPage.module.css";

const MyPageInfo = ({ memberInfo, formatPhoneNumber, backgroundColor }) => {
    const [editableInfo, setEditableInfo] = useState({
        name: memberInfo?.name || "",
        description: memberInfo?.description || "",
        company: memberInfo?.company || ""
    });

    useEffect(() => {
        setEditableInfo({
            name: memberInfo?.name || "",
            description: memberInfo?.description || "",
            company: memberInfo?.company || ""
        });
    }, [memberInfo]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditableInfo((prevInfo) => ({
            ...prevInfo,
            [name]: value,
        }));
    };

    const handleSave = async () => {
        const memberId = memberInfo.id;
        try {
            const response = await axios.put(`https://introme.co.kr/v1/card/${memberId}`, {
                name: editableInfo.name,
                description: editableInfo.description,
                company: editableInfo.company,
                color: backgroundColor
            });
            alert("Information updated successfully");
            setEditableInfo(response.data);
        } catch (error) {
            console.error("Error updating member information:", error);
            alert("Failed to update information");
        }
    };

    const member = JSON.parse(localStorage.getItem("member"));

    return (
        <div className={classes.MyPageInfo}>
            <div className={classes.InfoItem}>
                <span className={classes.InfoLabel}>Name:</span>
                <input
                    type="text"
                    name="name"
                    value={editableInfo.name}
                    onChange={handleChange}
                    className={classes.InfoValue}
                    style={{
                        border: "none",
                        borderBottom: "none",
                        background: "none",
                        boxShadow: "none",
                        outline: "none"
                    }}
                />
            </div>
            <div className={classes.InfoItem}>
                <span className={classes.InfoLabel}>Phone Number:</span>
                <span className={classes.InfoValue}>{formatPhoneNumber(memberInfo?.phoneNumber)}</span>
            </div>
            <div className={classes.InfoItem}>
                <span className={classes.InfoLabel}>Organization:</span>
                <input
                    type="text"
                    name="company"
                    value={editableInfo.company}
                    onChange={handleChange}
                    className={classes.InfoValue}
                    style={{
                        border: "none",
                        borderBottom: "none",
                        background: "none",
                        boxShadow: "none",
                        outline: "none"
                    }}
                />
            </div>
            <div className={classes.InfoItem}>
                <span className={classes.InfoLabel}>Email:</span>
                <span className={classes.InfoValue}>{memberInfo?.email}</span>
            </div>
            <div className={classes.InfoItem}>
                <span className={classes.InfoLabel}>Birthday:</span>
                <span className={classes.InfoValue}>{member.birthday}</span>
            </div>
            <div className={classes.InfoItem}>
                <span className={classes.InfoLabel}>Description:</span>
                <input
                    type="text"
                    name="description"
                    value={editableInfo.description}
                    onChange={handleChange}
                    className={classes.InfoValue}
                    style={{
                        border: "none",
                        borderBottom: "none",
                        background: "none",
                        boxShadow: "none",
                        outline: "none"
                    }}
                />
            </div>
            <button onClick={handleSave} className={classes.SaveButton}>Save</button>
        </div>
    );
};

export default MyPageInfo;
