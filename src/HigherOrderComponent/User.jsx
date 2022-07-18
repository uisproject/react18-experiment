import React from "react";

const User = ({ user, message }) => {
  return (
    <div>
      <strong>
        {user.name} {user.username}
      </strong>{" "}
      <br />
      <span>{user.email}</span>
      <div>{message}</div>
    </div>
  );
};

export default User;
