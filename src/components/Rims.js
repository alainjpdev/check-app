import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Rims(props) {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
    props.chooseRim(event.target.value)
  };

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Rims</InputLabel>
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
           <MenuItem value={"Sports + $475.00"}>Sports + $475.00</MenuItem>
            <MenuItem value={"Black + $600.00"}>Black + $600.00</MenuItem>
            <MenuItem value={"White + $695"}>White + $695</MenuItem>
            <MenuItem value={"Red + $695"}>Red + $695</MenuItem>
            <MenuItem value={"Blue + $695"}>Blue + $695</MenuItem>
            <MenuItem value={"Pink + $695"}>Pink + $695</MenuItem> 
        </Select>
      </FormControl>
     
    </div>
  );
}
