import React from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Button from '@mui/material/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: "auto",
            width: '100%',
        },
    },
}));
function Login() {
    const classes = useStyles();
  return (
    <div className='authon-box'>
            <div className='form'>
               
                <form className={classes.root} noValidate autoComplete="off">
                <div className='title'>
                    <span> ورود</span>

                </div>
                    <Grid container spacing={2} sx={{ m: 'auto' }}>
                        <Grid item xs={12}  >
                            <TextField id="outlined-search" label="نام" type="text" className='input-conFig-form' variant="outlined" />
                        </Grid>
                        <Grid item xs={12} >
                            <TextField
                                id="outlined-password-input"
                                label="پسورد"
                                type="password"
                                className='input-conFig-form'
                                autoComplete="current-password"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12} >
                            <TextField id="outlined-search" label="ایمیل" type="email" className='input-conFig-form' variant="outlined" />
                        </Grid>
                      
                        <Grid xs={6}>
                            <Button className="btn-submit" variant="contained" color="success">
                              ورود
                            </Button>
                        </Grid>

                    </Grid>
                </form>
            </div>
            <div className='image'></div>
        </div>
  )
}

export default Login