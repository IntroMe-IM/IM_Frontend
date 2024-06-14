import React, { useState, useEffect } from "react";
import NavBar from "../Common/NavBar";
import classes from "../Common/Layout.module.css";
import classesTeam from "./TeamSpace.module.css";
import { Link, useNavigate } from "react-router-dom";
import openSpace from "../Icon/openSpace.png";
import teamSpace_B from "../Icon/teamSpace_B.png";
import personIcon from "../Icon/personIcon.png";
import newproject from "../Icon/newProject.png";
import axios from "axios";

const TeamSpace = () => {
  const [projects, setProjects] = useState([]);
  const [owners, setOwners] = useState({});
  const memberId = JSON.parse(localStorage.getItem("member")).id;
  const navigate = useNavigate();

  const fetchProjects = async () => {
    try {
      const response = await axios.get(`https://introme.co.kr/v1/team/${memberId}`);
      const projectsData = response.data;

      // Fetch owner names
      const ownerNames = {};
      await Promise.all(projectsData.map(async (project) => {
        if (!ownerNames[project.owner]) {
          const ownerResponse = await axios.get(`https://introme.co.kr/v1/member/${project.owner}`);
          ownerNames[project.owner] = ownerResponse.data.name;
        }
      }));

      setProjects(projectsData);
      setOwners(ownerNames);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleProjectClick = (projectId) => {
    navigate(`/TeamSpaceDetail/${projectId}`);
  };

  return (
    <>
      <div className={classes.LoginPageLayout}>
        <div
          style={{
            display: "flex",
            margin: "0 auto",
            width: "95%",
            marginTop: "3vh",
          }}
        >
          <Link to="/OpenSpace" className={classesTeam.spaceDisable}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={openSpace} alt="openSpace" />
              오픈 스페이스
            </div>
          </Link>
          <Link to="/TeamSpace" className={classesTeam.spaceEnable}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={teamSpace_B} alt="teamSpace_B" /> 팀 스페이스
            </div>
          </Link>
        </div>
        {/*팀 스페이스 작성글 */}
        <div style={{ marginTop: "1vh" }}>
          {projects.map((project) => (
            <div
              key={project.id}
              style={{
                borderBottom: "1px solid black",
                width: "calc(95% - 30px)",
                margin: "0 auto",
                padding: "7px",
                display: "flex",
                cursor: "pointer",
              }}
              onClick={() => handleProjectClick(project.id)}
            >
              <div style={{ display: "flex" }}>
                {/*사진 div */}
                <div
                  style={{
                    margin: "0.5vh",
                    width: "15vh",
                    height: "15vh",
                    borderRadius: "15px",
                    backgroundColor: "gray",
                  }}
                ></div>

                {/*내용div*/}
                <div style={{ padding: "1vh" }}>
                  <div
                    style={{
                      fontWeight: "bold",
                      padding: "0.5vh",
                      height: "4vh",
                    }}
                  >
                    {project.name}
                  </div>
                  <div style={{ padding: "0.5vh", width: "100%" }}>
                    <div style={{ color: "gray", fontSize: "0.8rem" }}>
                      {new Date(project.create).toLocaleDateString()}~진행중
                    </div>
                    <div style={{ color: "gray", fontSize: "0.8rem" }}>
                      대표자: {owners[project.owner] || "Loading..."}
                    </div>
                    <div style={{ color: "gray", fontSize: "0.8rem" }}>
                      팀원: {project.members.join(", ")}
                    </div>
                  </div>
                </div>
                {/*인원 수 div */}
                <div style={{ width: "9vh" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <img
                      src={personIcon}
                      alt="personIcon"
                    />
                    <p style={{ margin: 0 }}> : {project.members.length}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Link to="/CreateProject">
          <img src={newproject} className={classesTeam.creatProject} alt="newProject" />
        </Link>
        <NavBar />
      </div>
    </>
  );
};

export default TeamSpace;
