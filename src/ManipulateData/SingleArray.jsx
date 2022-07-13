import React from "react";

const SingleArray = ({ arr }) => {
  let x = [];
  return (
    <>
      {arr.map((item, index) => {
        if (!x.includes(item)) {
          x.push(item);

          return <div key={index}>{item}</div>;
        }

        return <div key={index}>before</div>;
      })}
    </>
  );
};

export default SingleArray;
