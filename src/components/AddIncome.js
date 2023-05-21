import React from 'react'
import "./AddIncomeStyles.css";

export default function AddIncome() {
  return (
    <div>
      <div className='box'>
      <form className='incomebox'>
        <br/><h5>Income</h5>
        <br/><b><h4>Record New Income</h4></b>
        
          <br/><input type='text' class="title" placeholder='Enter Title'/><br/>
          <br/><input type='text' class='title' placeholder='Enter Description'/><br/>
          <br/><input type='text' class='title' placeholder='Enter Amount'/><br/>

          <br/><button class='btn'>Record Income</button>
        

      </form>
      </div>
    </div>
  )
}

