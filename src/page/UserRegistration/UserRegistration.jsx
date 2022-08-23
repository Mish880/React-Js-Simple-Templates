import { Table, TableContainer } from '@mui/material'
import React from 'react'
import "./UserRegistration.css"

const UserRegistrationform = ()  =>{
  return (
   
         <div className='main_form'>
        
         <form>
           <div className='container'>
               <h1>User Registration</h1>
               <p>Please fill this form to create an account</p>
            
                
               <label for="firstname"><b>Firstname</b></label>
               <input type="text" placeholder="Enter Firstname" name="" id="firstname" required></input>

               <label for="lastname"><b>Lastname</b></label>
               <input type="text" placeholder="Enter Lastname" name="" id="lastname" required></input>

               <label for="email"><b>Email</b></label>
               <input type="text" placeholder="Enter Email" name="" id="email" required></input>
              
               <label for="contact"><b>Contact</b></label>
               <input type="text" placeholder="Enter Contact" name="" id="contact" required></input>

               <p>By creating an account you agree to our <a href='#'>Terms & Privacy</a>.</p>

               <button type='submit' className='registerbtn'>Registration</button>

               <div className='signin'>
                 <p>Already have an account? <a href="#">Sign in</a>.</p>
               </div>

           </div>
         </form>
      
         <div>
             <h2> User Registration Table</h2>
    
         
          <table>
              <tr>
                 <th>First Name</th>
                 <th>Last Name</th>
                 <th>Email</th>
                 <th>Contact</th>
              </tr>
             <tr>
             <td> dcdcdc</td>
             <td> dcdcdc</td>
             <td> dcdcdc</td>
             <td> dcdcdc</td>
             </tr>
              
           </table>
          </div>
        

         </div>


      
   );
}

export default UserRegistrationform