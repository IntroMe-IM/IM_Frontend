import React from "react";

const MyPageInfo = ({ memberInfo, formatPhoneNumber, onClick }) => {
    return (
        <div
            onClick={onClick}
            style={{
                width: "85%",
                height: "20vh",
                margin: "0 auto",
                marginTop: "1.5vh",
                borderRadius: "10px",
                backgroundColor: memberInfo ? memberInfo.backgroundColor : "#262626",
            }}
        >
            <div style={{ height: "100%", width: "100%" }}>
                <div
                    style={{
                        marginTop: "2vh",
                        marginLeft: "2.5vh",
                        fontWeight: "bold",
                        color: "#FFFFFF",
                    }}
                >
                    {memberInfo && memberInfo.name}
                </div>
                <div
                    style={{
                        marginTop: "0.3vh",
                        marginLeft: "2.5vh",
                        fontWeight: "bold",
                        color: "#FFFFFF",
                    }}
                >
                    {memberInfo && memberInfo.organization}
                </div>
                <div style={{ marginTop: "1.5vh", marginLeft: "2.5vh" }}>
                    <div style={{ color: "#FFFFFF" }}>
                        Phone:&nbsp;{memberInfo && formatPhoneNumber(memberInfo.phoneNumber)}
                    </div>
                    <div style={{ color: "#FFFFFF" }}>
                        Email:&nbsp;&nbsp;{memberInfo && memberInfo.email}
                    </div>
                    <div style={{ color: "#FFFFFF" }}>Birthday: {memberInfo && memberInfo.birthday}</div>
                </div>
            </div>
        </div>
    );
};

export default MyPageInfo;
