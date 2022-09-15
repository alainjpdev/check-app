import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Tops(props) {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
    props.chooseTop(event.target.value)
  };

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Top</InputLabel>
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
                <MenuItem value={"Bimini Top Black + $795.00"}>Bimini Top Black + $795.00</MenuItem>
                <MenuItem value={"Bimini Top White + $795.00"}>Bimini Top White + $795.00</MenuItem>
                <MenuItem value={"Bimini Top Tan + $795.00"}>Bimini Top Tan + $795.00</MenuItem>
                <MenuItem value={"Striped Top + $895.00"}>Striped Top + $895.00</MenuItem>
                <MenuItem value={"Bimini Top With Side Black + $1095.00"}>Bimini Top With Side Black + $1095.00</MenuItem>
                <MenuItem value={"Bimini Top With Side White + $1095.00"}>Bimini Top With Side White + $1095.00</MenuItem>
                <MenuItem value={"Bimini Top With Side Tan + $1095.00"}>Bimini Top With Side Tan + $1095.00</MenuItem>
                <MenuItem value={"Striped Top With Sides + $1195"}>Striped Top With Sides + $1195</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}