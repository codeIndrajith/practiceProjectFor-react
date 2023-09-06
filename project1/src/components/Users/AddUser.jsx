import React from "react";
import Card from "../UI/Card";
import classes from './AddUser.module.css'

function AddUser(props) {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="username">Username</label>
        <input  type="text" id="username" />
        <label  htmlFor="age">Age</label>
        <input type="number" id="age" />

        <button type="submit">Add user</button>
      </form>
    </Card>
  );
}

export default AddUser;
