import React from 'react';
import { TextField } from '@mui/material';

function DisabledSelectNumber({w,h,value,quantity}) {
    return (
   <TextField style={{ height:h , width:w, backgroundColor:"#EBEDF0"}}
          disabled
          id="disabledSelectNumber"
          label="Quantity"
          type="number"
          variant="outlined"
          backgroundColor="#EBEDF0"
          defaultValue={quantity}
          InputLabelProps={{
            shrink: true,
          }}
          value={value}
        />
    )
}
export default DisabledSelectNumber;