import React from 'react'
import "./Dashboard.css"

const Dashboardform = () => {
  return (
      <div class="main">
          <div class="navbar">
              <div class = "icon">
                  <h2 class="logo">React DashBoard</h2>
              </div>
              <div class="menu">
                 <ul>
                    <li><a href='#'>HOME</a></li>
                    <li><a href='#'>ABOUT</a></li>
                    <li><a href='#'>CUSTOMER</a></li>
                    <li><a href='#'>BLOG</a></li>
                    <li><a href='#'>CONTACT</a></li>
                    
                 </ul>
              </div>
              <div class="search">
                  <input class="srch" type="search" name='' placeholder='Type To Text'/>
                  <a href="#"> <button class="btn">Search</button></a>
              </div>
            </div>
     
           <div class="content">
               <h1>React Js  <br/><span> Made With</span><br/>Dashboard</h1>
               <p class="par"> Lorem ipsum dolor, sit amet consectetur adipisicing Numquam reiciendis,
                  quasi laborum! In ea magni iure?
                </p>

               <button class="cn"><a href="#">Signup</a></button>
            

          <div class="form">
             <h2>Login here</h2>
             <input type="email" name="email" placeholder='Enter Email Here'/>
             <input type="password" name='' placeholder='Enter Passwor Here'/>
             <button class="btnn"><a href='#'>Login</a></button>

             <p class="link">Don't have an account<br/>
             <a href="#">Sign up</a>here</p>
             <p class="liw">Log in with</p>
            
            </div>  
        </div>
      </div> 
  )
}

export default Dashboardform