import React from "react";
import { Avatar } from "@mui/material";
import "../styles/userCard.css";

const UserCard = (props) => {
  return (
    <div className="UserCardWrapper">
      <Avatar
        variant="square"
        sx={{
          position: "absolute",
          top: "-40%",
          left: "50%",
          transform: "translate(-50%,50%)",
          height: "80px",
          width: "80px",
          borderRadius: "10px",
        }}
      />
      <h5>{props.user.username}</h5>
      <p>
        ID:<span> {props.user.id}</span>
        <br />
        Email: <span>{props.user.email}</span>
        <br />
        Phone: <span>{props.user.phone}</span>
        <br />
        <button>Follow</button>
      </p>
    </div>
  );
};

export default UserCard;
