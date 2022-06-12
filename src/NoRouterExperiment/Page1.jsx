import React from "react";

const Page1 = ({ pageHandler }) => {
  return (
    <div>
      <h1>This is Page 1</h1>
      <button
        onClick={() => {
          pageHandler(1);
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Page1;
