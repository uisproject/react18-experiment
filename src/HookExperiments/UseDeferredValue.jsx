import React, { useState, useDeferredValue } from "react";
// so apparently useDeferredValue is similar to useTransition & startTransition, the main different is that this hook is used when you don't have the control over the props of the data that has been passed into component
// but useTransition is more preferable

const UseDeferredValue = () => {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const LIMIT_SIZE = 10000;

  const onChangeHandler = (e) => {
    setInput(e.target.value);
    let tmp = [];
    for (let i = 0; i < LIMIT_SIZE; i++) {
      tmp.push(e.target.value);
    }

    setList(tmp);
  };

  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => {
          onChangeHandler(e);
        }}
      />

      <ListItem lists={list} />
    </>
  );
};

const ListItem = ({ lists }) => {
  // so instead of using startTransition over the state we can use this to improve without setting priority, just give the effect of concurrency over the data that want to delay
  const deferredList = useDeferredValue(lists);

  return (
    <>
      {deferredList.map((item, idx) => (
        <div key={idx}>{item}</div>
      ))}
    </>
  );
};

export default UseDeferredValue;
