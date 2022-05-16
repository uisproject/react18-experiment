import React, { useEffect, useRef } from "react";

function UseEffectProblem() {
  // well, unlike before by initializing empty dependency will cause useEffect run only once, but at React18 this will be rendered twice
  // useEffect(() => {
  //   console.log("render");
  // }, []);

  // to fix this we can use "useRef" to check wether the component is already rendered or not
  const ref = useRef();

  useEffect(() => {
    if (ref.current) return;

    ref.current = true; // so basically adding this to tell that the useEffect has run once

    // ...your logic here
    console.log("isRendered");
  }, []);

  return <div>Open Console Log</div>;
}

export default UseEffectProblem;
