import React from "react";

import classes from "./MealItemForm.module.css";

const MealItemForm = () => {
  return (
    <form className={classes.form} action="">
      <input type="text" />
      <button type="submit">+ Add</button>
    </form>
  );
};

export default MealItemForm;
