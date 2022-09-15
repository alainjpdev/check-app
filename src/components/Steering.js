import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Steering(props) {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
    props.chooseSteering(event.target.value)
  };

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Steering</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
                <MenuItem value={"Standard Wheel + $0.00"}>Standard Wheel + $0.00</MenuItem>
                <MenuItem value={"Wood Steering Wheel + $495.00"}>Wood Steering Wheel + $495.00</MenuItem>
        </Select>
      </FormControl>
      
    </div>
  );
}