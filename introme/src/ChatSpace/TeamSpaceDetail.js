import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import classes from "../Common/Layout.module.css";
import cancleButton from "../Icon/cancleButton.png";
import updateButton from "../Icon/updateButton.png";
import { Link } from "react-router-dom";

const TeamSpaceDetail = () => {
    const { id } = useParams();
    const [team, setTeam] = useState(null);
    const [ownerName, setOwnerName] = useState("");

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
                </div>

                <div style={{ margin: "4vh" }}>
                    <div
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
                    >
                        {team.name}
                    </div>
                </div>
                <div style={{ margin: "4vh" }}>
                    <div
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
                    >
                        {team.description}
                    </div>
                </div>
                <div style={{ display: "grid", placeItems: "center" }}>
                    <Link to="/TeamSpace">
                        <img src={updateButton} style={{ margin: "1vh" }} alt="Update Button" />
                    </Link>
                    <Link to="/TeamSpace">
                        <img src={cancleButton} alt="Cancel Button" />
                    </Link>
                </div>
            </div>
        </>
    );
};

export default TeamSpaceDetail;
