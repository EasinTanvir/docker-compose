import React from "react";

const Posts = () => {
  const BASE_URL = process.env.BASE_URL;
  return <div>{JSON.stringify(BASE_URL)}</div>;
};

export default Posts;
