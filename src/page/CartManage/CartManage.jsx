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
        <Autocomplete
          disablePortal
         id="combo-box-demo"
         /*options={top100Films}*/
         sx={{ width: 300 }}
         renderInput={(params) => <TextField {...params} label="Vegatables" />}
        />

        <Autocomplete
        disablePortal
        id="combo-box-demo"
        /*options={top100Films}*/
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="foods" />}
        />
    </div> 

       <div>
        <TextField id="standard-basic" label="Date" variant="standard" className='txt1'/>
        <TextField id="standard-basic" label="qty" variant="standard" className='txt2'/> 
       </div> 

       <div>

       </div>
       <Button variant="contained" style={{width:'14vh', left:'140vh' , top:'229px'}} className='buttonone' color='primary'>Save</Button>
       <Button variant="contained" style={{width:'14vh', top:'229px'}} className='buttontwo'>Cancel</Button>
        </div>
    </div>
  );
}

export default CartManage;