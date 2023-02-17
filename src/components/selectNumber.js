import React from 'react';
import { TextField } from '@mui/material';
import './selectNumber.css'


function App(w,h) {
    return (
        <div>
   <TextField style={{ minHeight: `${h}px`, minWidth:`${w}px`}}
          id="selectNumber"
          label="Quantity"
          type="number"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
          bordered
        />
        </div>
    )
}
export default App;