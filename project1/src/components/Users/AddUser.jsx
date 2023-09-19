import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";

function AddUser(props) {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const onSubmitHandler = (event) => {
    event.preventDefault();
    if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }
    if(+enteredAge < 1) {
      return;
    }
    console.log(enteredUsername, enteredAge);
    setEnteredUsername('')
    setEnteredAge('')
  };

  const handleUsername = (event) => {
    setEnteredUsername(event.target.value);
  };

  const handleAge = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="username">Username</label>
        <input onChange={handleUsername} value={enteredUsername} type="text" id="username" />
        <label htmlFor="age">Age</label>
        <input onChange={handleAge} value={enteredAge} type="number" id="age" />

        <Button type="submit">Add user</Button>
      </form>
    </Card>
  );
}

export default AddUser;
