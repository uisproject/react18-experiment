import React, { useState, useEffect } from "react";
import axios from "axios";

const withUserId = (Component) => {
  const NewComponent = ({ userId, ...props }) => {
    const [user, setUser] = useState(null);

    // console.log("this is props", props);

    useEffect(() => {
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then((res) => setUser(res.data));
    }, []);

    if (!user) return "Loading";

    return <Component {...props} user={user} />;
  };

  return NewComponent;
};

export default withUserId;
