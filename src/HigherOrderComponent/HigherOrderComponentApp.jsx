import React from "react";
import User from "./User";
import withUserId from "./withUserId";

const SpecificUser = withUserId(User);

const HigherOrderComponentApp = () => {
  return (
    <div>
      <SpecificUser userId={1} {...{ message: "Hi, World" }} />
      <SpecificUser userId={2} />
    </div>
  );
};

export default HigherOrderComponentApp;
