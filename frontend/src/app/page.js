import React from "react";

const HomePage = async () => {
  let usersData = [];
  const BASE_URL = "http://localhost:5000";

  try {
    const users = await fetch(`${BASE_URL}/users`);
    const data = await users.json();
    usersData = data;
  } catch (err) {
    console.log("err", err);
  }

  console.log("usersData", usersData);
  return (
    <div className=" p-10">
      {BASE_URL ? (
        usersData.map((item) => <h1 key={item.id}>{item.name}</h1>)
      ) : (
        <p>No Base Url Found</p>
      )}
    </div>
  );
};

export default HomePage;
