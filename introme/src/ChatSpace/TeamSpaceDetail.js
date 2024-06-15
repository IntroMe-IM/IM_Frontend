import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import classes from "../Common/Layout.module.css";
import cancleButton from "../Icon/cancleButton.png";
import updateButton from "../Icon/updateButton.png";
import { Link } from "react-router-dom";

const TeamSpaceDetail = () => {
    const { id } = useParams();
    const [team, setTeam] = useState(null);
    const [ownerName, setOwnerName] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchTeam = async () => {
            try {
                const response = await axios.get(`https://introme.co.kr/v1/team/d/${id}`);
                setTeam(response.data);

                // Fetch owner's name
                const ownerResponse = await axios.get(`https://introme.co.kr/v1/member/${response.data.ownerId}`);
                setOwnerName(ownerResponse.data.name);
            } catch (error) {
                console.error("Error fetching team details:", error);
            }
        };

        fetchTeam();
    }, [id]);

    const handleUpdate = async () => {
        try {
            await axios.put(`https://introme.co.kr/v1/team/${team.id}`, {
                name: team.name,
                project: team.project,
                description: team.description,
            });
            navigate('/TeamSpace'); // 업데이트 후 팀 스페이스로 이동
        } catch (error) {
            console.error("Error updating team details:", error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTeam((prevTeam) => ({
            ...prevTeam,
            [name]: value,
        }));
    };
    console.log(team)
    if (!team) {
        return <div>Loading...</div>;
    }
    return (
        <>
            <div className={classes.createProjectLayout}>
                <div style={{ marginTop: "5vh", margin: "4vh", fontSize: "1.5rem", fontWeight: "bold" }}>
                    <div style={{ fontSize: "0.8rem" }}>작성자: {ownerName}</div>
                    <div style={{ fontSize: "0.8rem" }}>팀원: {team.members.join(", ")}</div>
                    <div style={{ fontSize: "0.8rem" }}>생성일: {team.createdDate}</div>
                    <div style={{ fontSize: "0.8rem" }}>
                        팀명: <input
                            type="text"
                            name="name"
                            value={team.name}
                            onChange={handleChange}
                            style={{
                                width: `${team.name.length + 4}ch`,
                                border: "none",
                                borderBottom: "1px solid black",
                                background: "none",
                                boxShadow: "none",
                                outline: "none",
                                fontWeight: "bold",
                                fontSize: "0.8rem",
                            }}
                        />
                    </div>
                </div>

                <div style={{ margin: "4vh" }}>
                    <input
                        type="text"
                        name="project"
                        value={team.project}
                        onChange={handleChange}
                        style={{
                            border: "none",
                            borderBottom: "1px solid black",
                            background: "none",
                            boxShadow: "none",
                            outline: "none",
                            width: "calc(100% - 30px)",
                            padding: "0.5rem",
                            marginTop: "-3rem",
                            fontWeight: "bold",
                            fontSize: "1.5rem",
                        }}
                    />
                </div>
                <div style={{ margin: "4vh" }}>
                    <textarea
                        name="description"
                        value={team.description}
                        onChange={handleChange}
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
                            marginTop: "-3rem",
                            resize: "none",
                            overflowY: "hidden",
                        }}
                    />
                </div>
                <div style={{ display: "grid", placeItems: "center" }}>
                    <img
                        src={updateButton}
                        style={{ margin: "1vh", cursor: "pointer" }}
                        alt="Update Button"
                        onClick={handleUpdate}
                    />
                    <Link to="/TeamSpace">
                        <img src={cancleButton} alt="Cancel Button" />
                    </Link>
                </div>
            </div>
        </>
    );
};

export default TeamSpaceDetail;
