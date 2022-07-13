import React, { useState } from "react";
import SingleArray from "./SingleArray";
import test from "./soal test";

const ManipulateApp = () => {
  const [data, setData] = useState(test);

  return (
    <div>
      {data.map((item, index) => (
        <div>
          <SingleArray key={index} arr={item} />
          <div>-------------------------------------</div>
        </div>
      ))}
    </div>
  );
};

export default ManipulateApp;
