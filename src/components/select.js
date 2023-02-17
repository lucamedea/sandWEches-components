import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect({h,w}) {
    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
      setAge(event.target.value);
    };

    return (
        <FormControl> 
          <InputLabel
           id="demo-simple-select-label"></InputLabel>
            <Select style={{ minHeight: `${h}px`, minWidth:`${w}px`}}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            variant="outlined"
            heigth={h}
            width={w}
            //value={age}
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
    );
  }