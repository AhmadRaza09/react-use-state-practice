import { useState } from "react";
import "./NewUser.css";
const NewUser = (props) => {
  //   console.log("ahmad");
  const [enteredInput, setEnteredInput] = useState({
    email: "",
    name: "",
    phone: "",
  });

  const inputHandler = (e) => {
    setEnteredInput((prevState) => {
      //   console.log(prevState);
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
    // console.log(enteredInput);
  };

  const addNewUserHandler = (e) => {
    e.preventDefault();
    // console.log(enteredInput);
    props.userData(enteredInput);
    setEnteredInput((_) => {
      return {
        email: "",
        name: "",
        phone: "",
      };
    });
    console.log("done");
  };
  return (
    <form className="form" onSubmit={addNewUserHandler}>
      <div className="form__inner">
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          name="email"
          value={enteredInput.email}
          onChange={inputHandler}
        />
      </div>
      <div className="form__inner">
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          name="name"
          value={enteredInput.name}
          onChange={inputHandler}
        />
      </div>
      <div className="form__inner">
        <label htmlFor="phone">Phone Number:</label>
        <input
          id="phone"
          type="phone"
          name="phone"
          value={enteredInput.phone}
          onChange={inputHandler}
        />
      </div>
      <div className="form-inner__button">
        <button type="submit" className="form__button">
          Create User
        </button>
      </div>
    </form>
  );
};

export default NewUser;
