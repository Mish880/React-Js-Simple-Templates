import React from 'react'
import "./UserRegistration.css"
import  Typography  from '@mui/material/Typography';
import  TextField  from '@mui/material/TextField';
import  Button from '@mui/material/Button';
import  Table from '@mui/material/Table';
import  TableBody from '@mui/material/TableBody';
import  TableCell  from '@mui/material/TableCell';
import  TableContainer  from '@mui/material/TableContainer';
import  TableHead  from '@mui/material/TableHead';

const UserRegistrationform = ()  =>{
  return (
        
      <div>

          <Typography variant="h5" gutterBottom style={{fontSize:'38px', fontFamily:'comfortea, sans-serif'}} component="div">
           UserRegistration
         </Typography>

         <div className='text_container'>
              <TextField id="standard-basic" label="First Name" variant="standard" className='txt'/>
              <TextField id="standard-basic" label="Last Name" variant="standard" className='txt'/>
              <TextField id="standard-basic" label="Email Name" variant="standard" className='txt'/>
              <TextField id="standard-basic" label="User Name" variant="standard" className='txt'/>
         </div>
      



      </div>
         


      
   );
}

export default UserRegistrationform