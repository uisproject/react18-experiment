// useId is a hook for generating unique IDs that are stable across the server and client, while avoiding hydration mismatches.
// useId is not for generating keys in a list. Keys should be generated from your data.

// so it's just simply generate id for client and server side, nothing else hahaha

import React, { useId } from "react";

const UseId = () => {
  const id1 = useId();
  const id2 = useId();

  return (
    <div>
      <div className={id1}>first sentence</div>
      <div className={id2}>second sentence</div>
    </div>
  );
};

export default UseId;
