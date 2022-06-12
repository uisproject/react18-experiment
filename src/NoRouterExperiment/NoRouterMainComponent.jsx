import React, { useState } from "react";
import Page1 from "./Page1";
import Page2 from "./Page2";

// 1st way
const NoRouterMainComponent = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const pageHandler = (page) => {
    setCurrentPage((prev) => {
      return prev + page;
    });
  };

  switch (currentPage) {
    case 0:
      return <Page1 pageHandler={pageHandler} />;
      break;

    case 1:
      return <Page2 pageHandler={pageHandler} />;
      break;
  }
};

export default NoRouterMainComponent;
