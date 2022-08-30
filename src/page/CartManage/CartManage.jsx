import React from 'react'
import './CartManage.css'
import Typography  from '@mui/material/Typography';
import Autocomplete  from '@mui/material/Autocomplete';
import TextField  from '@mui/material/TextField';
import Button  from '@mui/material/Button'; 

const CartManage = () => {
  return (
    <div>
        <div>
        <Typography variant="h5" gutterBottom style={{fontSize: '38px', fontFamily: 'comfortaa, sans-serif'}}
         component="div">
           Cart Manage
       </Typography>
     
        <div>
           <Autocomplete>
                
           
           
           </Autocomplete>  
        </div> 

        </div>
    </div>
  );
}

export default CartManage