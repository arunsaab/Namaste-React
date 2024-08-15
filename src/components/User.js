import { useState } from "react";

const User = ({ name }) => {
  const [count, setCount] = useState(0);

  return (
    <div className="user-card">
      <h1>Count: {count}</h1>
      <h1>Name: {name}</h1>
      <h2>Location: Pune</h2>
      <h2>Contact: arunsinghsaab98@gmail.com</h2>
    </div>
  );
};

export default User;
