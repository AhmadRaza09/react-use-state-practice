import { useState } from "react";
import NewUser from "./components/NewUser/NewUser";
import User from "./components/UserList/User";

function App() {
  const [users, setUsers] = useState([
    {
      id: "1",
      name: "Ahmad Raza",
      email: "ahmad.raza@gmail.com",
      phone: "0309986722",
    },
    {
      id: "2",
      name: "Ahmad Fareed",
      email: "ahmad.fareed@gmail.com",
      phone: "0309954722",
    },
  ]);
  const newUserData = (userData) => {
    userData["id"] = Math.random();
    setUsers((prevState) => {
      return [userData, ...prevState];
    });
    console.log(userData);
  };
  return (
    <div>
      <NewUser userData={newUserData} />
      <User usersInfo={users} />
    </div>
  );
}

export default App;
