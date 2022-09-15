import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Seats(props) {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
    props.chooseSeat(event.target.value)
  };

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Seats</InputLabel>
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
                <MenuItem value={"Black + $0.00"}>Black + $0.00</MenuItem>
                <MenuItem value={"White + $1200.00"}>White + $1200.00</MenuItem>
                <MenuItem value={"Bench Black + $995.00"}>Bench Black + $995.00</MenuItem>
                <MenuItem value={"Bench White (and seats) + $1595"}>Bench White (and seats) + $1595</MenuItem>
        </Select>
      </FormControl>
      
    </div>
  );
}
