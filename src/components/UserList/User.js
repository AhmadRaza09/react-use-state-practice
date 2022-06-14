import "./User.css";
import UserList from "./UserList";

const User = (props) => {
  console.log(props.usersInfo);
  return (
    <div className="user">
      {props.usersInfo.map((user) => (
        <UserList
          name={user.name}
          email={user.email}
          phone={user.phone}
          key={user.id}
        />
      ))}
    </div>
  );
};

export default User;
