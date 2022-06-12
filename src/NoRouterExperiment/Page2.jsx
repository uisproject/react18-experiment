import React from "react";

const Page2 = ({ pageHandler }) => {
  return (
    <div>
      <h1>This is Page 2</h1>
      <button
        onClick={() => {
          pageHandler(-1);
        }}
      >
        Previous
      </button>
    </div>
  );
};

export default Page2;
