import React from 'react'
import "./login.css"

const Loginform = () => {
  return (
    <div className='main_panale'>
        <div className='login_form'>
        <div id='box_lable'>
           <div id='icon_image'></div>
            <h3>Login Form</h3>
        </div>
        
        <div id='box_form'>
            <input type="text" placeholder='UserName'/>
            <input type="password" placeholder='Password'/>
        </div>
        <div id='box_button'>
            <div id='btn_login'>login</div>
            <h5>Create new user account? <a href="/signup">click here</a></h5>
        </div>
        </div>
       
    </div>
  )
}

export default Loginform
