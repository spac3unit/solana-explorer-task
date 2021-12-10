import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export function SearchInput({ handleSearch, searchQuery }) {
  // const [name, setName] = React.useState('');
  const handleChange = (event) => {
    // setName(event.target.value);
    event.preventDefault();
    handleSearch(event);
  };

  return (
    <Box component="form" noValidate autoComplete="off">
      <TextField
        fullWidth
        label="wallet"
        id="outlined-name"
        value={searchQuery}
        onChange={handleChange}
      />
    </Box>
  );
}
