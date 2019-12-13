import React from 'react';
// import { } from '@material-ui/core/styles';
import { makeStyles, InputLabel,MenuItem, FormControl ,Select  } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect() {
  const classes = useStyles();
  const [category, selectcategory] = React.useState('');

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = event => {
    selectcategory(event.target.value);
  };
  

  return (
    <div>
      
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel ref={inputLabel} id="Main-Category">
          Main Category
        </InputLabel>
        <Select
          labelId="Main-Category"
          id="Main-Category"
          value={category}
          onChange={handleChange}
          labelWidth={labelWidth}
        >
          <MenuItem value="">
          </MenuItem>
          <MenuItem value={1}>Onraod</MenuItem>
          <MenuItem value={2}>Onfreight</MenuItem>
        </Select>

      </FormControl>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="Sub-Category">Sub Category</InputLabel>
        <Select
          labelId="Sub-Category"
          id="Sub-Category"
          value={category}
          onChange={handleChange}
        >
          <MenuItem value="">
          </MenuItem>
          <MenuItem value={1}>Standard</MenuItem>
          <MenuItem value={2}>Normal </MenuItem>
          <MenuItem value={3}>Express </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
