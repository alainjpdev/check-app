import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import storeItems from "./data/items.json"

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
          
          {storeItems[3].map(item => (
           <MenuItem value={item.id}>{JSON.stringify(item.name)}  ${item.price}</MenuItem>
          ))}
          </Select>
      </FormControl>
     
    </div>
  );
}
