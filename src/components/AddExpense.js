import React from "react";
import "./AddExpenseStyles.css";
import NavbarAfterLogin from "./NavbarAfterLogin";

export default function AddExpense() {
  return (
    <div>
      <NavbarAfterLogin/>
      <div className="box">
        <form className="expensebox">
          <br />
          <h5>Expense</h5>
          <br />
          <b>
            <h4>Record New Expense</h4>
          </b>

          <br />
          <input type="text" class="title" placeholder="Enter Title" />
          <br />
          <br />
          <input type="text" class="title" placeholder="Enter Description" />
          <br />
          <br />
          <input type="text" class="title" placeholder="Enter Amount" />
          <br />

          <br />
          <button class="btn">Record Expense</button>
        </form>
      </div>
    </div>
  );
}
