import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';

export default function Stereo(props) {
  const [checked, setChecked] = React.useState(props.stereo);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    // console.log(event.target.checked)
    props.isIt(event.target.checked)
  };

  return (
    <Checkbox
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
      label="bluetooh"
    />
  );
}