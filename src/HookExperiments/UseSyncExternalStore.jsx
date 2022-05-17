import React, { useState, useSyncExternalStore } from "react";

// so based on the research i read https://www.youtube.com/watch?v=xmaWMY2-7cU
// he explained that this hook is intended to sync the external library, so meaning that you are going to use 2 or more library (the same library)

// let's say we use date library
// well it might be a little bit complex but just see the note yourself kay!

const UseSyncExternalStore = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setToggle((prev) => !prev);
        }}
      >
        Toggle
      </button>
      <div>
        {toggle && <Component />}
        <Component />
      </div>
    </>
  );
};

let now = new Date().toLocaleDateString(); // 1. initializing external lib

setInterval(() => {
  now = new Date().toLocaleTimeString(); // 5. giving changes to the external library
  notifiers.forEach((notify) => notify()); // 5. telling the hook there is an update, so it will be updated immediately
}, 1000);

const notifiers = new Set(); // 2. it's important because the way i see that any new changes is stored into array so you must set this

const subscribe = (notify) => {
  // 3.creating subscribe fn, it's used to add the new changes to notify, so this might be the template for the subscribe, idk, further research is needed
  notifiers.add(notify);

  return () => notifiers.delete(notify);
};

const Component = () => {
  // 4.so the useSyncExternalStore is accepting 2 params,
  // first one the subscribe itself
  // second is the external library that will be used
  let store = useSyncExternalStore(subscribe, () => now);

  return <div>The time is: {store}</div>;
};

export default UseSyncExternalStore;
