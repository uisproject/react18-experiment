import React, {
  useInsertionEffect,
  useLayoutEffect,
  useEffect,
  useState,
} from "react";
// The signature is identical to useEffect, but it fires synchronously before all DOM mutations. Use this to inject styles into the DOM before reading layout in useLayoutEffect. Since this hook is limited in scope, this hook does not have access to refs and cannot schedule updates.

const UseInsertionEffect = () => {
  const [something, setSomething] = useState(false);
  // so i throw these unordered, and as you can see that there are main difference in those
  //   1. useEffect is rendered when all components are rendered
  //   2. useLayoutEffect is rendered based on the ordered where the useLayoutEffect is placed, i place 2 useLayoutEffect to see which one is rendered first or meaning synchronously
  //   3. the useInsertionEffect is similar to useLayoutEffect but the main difference is this will be printed first because it will be executed when dom is not printed yet, so the very thing it will be printed first is the useInsertionEffect and it's also synchronously like useLayoutEffect

  useEffect(() => {
    console.log("useEffect is executed");
  });

  useLayoutEffect(() => {
    console.log("useLayoutEffect 2nd is executed");
  });

  useLayoutEffect(() => {
    console.log("useLayoutEffect is executed");
  });

  useInsertionEffect(() => {
    console.log("useInsertionEffect 2nd is executed");
  });

  // i think that this useInsertionEffect is probably better than the usual useEffect since it will try to fetch data before the dom is finished
  useInsertionEffect(() => {
    console.log("useInsertionEffect is executed");
    setTimeout(() => {
      fetchJSONPlaceholder().then((res) => {
        console.log(res);
      });
    }, 5000);
  });

  const fetchJSONPlaceholder = async () => {
    const fetchData = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await fetchData.json();

    return json;
  };

  return (
    <div>
      <div>Open your console</div>
      <button
        onClick={() => {
          setSomething(!something);
        }}
      >
        Rerender!
      </button>
    </div>
  );
};

export default UseInsertionEffect;
