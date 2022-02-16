import React from "react";

import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = ({ id }) => {
  return (
    <form className={classes.form} action="">
      <Input
        label="Amount"
        input={{
          id: "amount" + id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
        type="text"
      />
      <button type="submit">+ Add</button>
    </form>
  );
};

export default MealItemForm;
