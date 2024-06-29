import React from "react";
import { Link } from "react-router-dom";

const Items = ({ name, id }) => {
  return (
    <div>
      <Link to={`/post/${id}`}>
        <h1>{name}</h1>
      </Link>
    </div>
  );
};

export default Items;
