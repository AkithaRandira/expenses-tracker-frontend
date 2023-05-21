import React from 'react'
import "./UpdateUserStyles.css";

export default function UpdateUser() {
    return (
        <div>
          <form className="UpdateUser">
            
            <b><h4>Update User Profile</h4></b><br/>
            <h5>Hi user, Do you want to update your profile ?</h5><br/>
            <br/><input type='text' class="field" placeholder="First Name"/><br/>
           <br/> <input type='text' class="field" placeholder="Last Name"/><br></br>
           <br/> <input type='e-mail' class="field" placeholder="E=mail"/><br></br>
            
            <br></br><button class='button'> UPDATE </button>
          </form>  
        </div>
    )
}