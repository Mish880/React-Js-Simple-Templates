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
import  TableRow from '@mui/material/TableRow';
import  Paper from '@mui/material/Paper';

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
              <TextField id="standard-password-input" label="password" type="password" autoComplete="current-password" variant="standard" className='txt'/>
              
              
              <TextField id="standard-basic" label="City" variant="standard" className='txt'/>
              <TextField id="standard-basic" label="Street" variant="standard" className='txt'/>
              <TextField id="standard-basic" label="Street No" variant="standard" className='txt'/>
              <TextField id="standard-basic" label="Zip Code" variant="standard" className='txt'/>
              <TextField id="standard-basic" label="Lat Value" variant="standard" className='txt'/>
              <TextField id="standard-basic" label="Long Value" variant="standard" className='txt'/>
              <TextField id="standard-basic" label="Mobile No" variant="standard" className='txt'/>
         </div>
         
          <div className='btn__container'>
               <Button variant="contained" color='warning' className='clear'>Clear</Button>
               <Button variant="contained" color='secondary' className='clear'>Save</Button>
          </div>

       <div>
       <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} className="table" size ="small" aria-label="simple table">
        <TableHead>
          <TableRow>
         
            <TableCell classes='col'>First Name</TableCell>
            <TableCell classes='col'>Last Name</TableCell>
            <TableCell classes='col'>Email</TableCell>
            <TableCell classes='col'>City</TableCell>
            <TableCell classes='col'>Street</TableCell>
            <TableCell classes='col'>Street No</TableCell>
            <TableCell classes='col'>Zip Code</TableCell>
            <TableCell classes='col'>Lat Value</TableCell>
            <TableCell classes='col'>Long Value</TableCell>
            <TableCell classes='col'>Mobile No</TableCell>
            <TableCell classes='col'>Options</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
          {/*{rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}  */}
        </TableBody>
      </Table>
    </TableContainer>
       </div>
       
  </div>
         


      
   );
}

export default UserRegistrationform;