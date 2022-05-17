import React, { useEffect, useRef, useState, useTransition } from "react";

const UseTransitionFetch = () => {
  const [isPending, startTransition] = useTransition();
  const [data, setdData] = useState([]);
  const ref = useRef();

  useEffect(() => {
    if (ref.current == true) return;

    // fetch API
    getData().then((res) => {
      startTransition(() => {
        setdData(res);
      });
    });

    // check if the component is rendered
    ref.current = true;
  }, []);

  return (
    <>
      {isPending
        ? "isloading"
        : data.map((item, idx) => <Component2 key={idx} title={item.title} />)}
    </>
  );
};

const getData = async () => {
  const fetchData = await fetch("https://jsonplaceholder.typicode.com/posts");
  const json = fetchData.json();

  return json;
};

const Component2 = ({ title }) => {
  return <div>{title}</div>;
};

export default UseTransitionFetch;
