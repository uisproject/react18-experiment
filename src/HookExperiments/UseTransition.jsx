import React, { useState, useTransition } from "react";

// so useTransition is giving priority which state should be rendered first as you can see that the initial state return isPending and startTransition
// isPending mean the logic we will do as long the transition is on going
// startTransition is like "do this state when you finish all priority state" meaning that placing state inside of startTransition is like telling to run this function or state on low priority or after all state has been accomplish

function UseTransition() {
  const [isPending, startTransition] = useTransition();
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const LIMIT_SIZE = 10000;

  const onChangeHandler = (e) => {
    setInput(e.target.value);

    startTransition(() => {
      let tmp = [];
      for (let i = 0; i < LIMIT_SIZE; i++) {
        tmp.push(e.target.value);
      }

      setList(tmp);
    });
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

      {isPending
        ? "loading"
        : list.map((item, idx) => <div key={idx}>{item}</div>)}
    </>
  );
}

export default UseTransition;
