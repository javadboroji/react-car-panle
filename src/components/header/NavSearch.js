import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
function NavSearch() {
  return (
    <>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >

<TextField
          id="filled-search"
          label="Search field"
          type="search"
          variant="filled"
        />
    </Box>
 
    </>
  )
}

export default NavSearch