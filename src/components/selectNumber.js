import React from 'react';
import { TextField } from '@mui/material';
import './selectNumber.css'


function SelectNumber({w,h,value,quantity}) {
    return (
        <div >
   <TextField style={{width:w, height:"10px",background:"white"}}
          id="selectNumber"
          label="Quantity"
          type="number"
          variant="outlined"
          color="warning"
          defaultValue={quantity}
          focused
          InputLabelProps={{
            shrink: true,
          }}
          value={value}
        />
        </div>
    )
}
export default SelectNumber;