import React from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

function Login() {
    const classes = useStyles();
    return (
        <div className='authon-box'>
            <div className='form'>
                <div className='logo'></div>
                <div className='title'>
                    <span></span>
                    <span></span>
                </div>
                <form className={classes.root} noValidate autoComplete="off">
                <Grid container spacing={2}>
                <Grid item xs={12} >
                    <TextField id="outlined-search" label="نام" type="text" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} >
                        <TextField
                            id="outlined-password-input"
                            label="پسورد"
                            type="password"
                            autoComplete="current-password"
                            variant="outlined"
                        />
                        </Grid>
                        <Grid item xs={12} lg={6}>
                        <TextField id="outlined-search" label="نام برند" type="search" variant="outlined" />
                        </Grid>
                        
                    </Grid>
                </form>
            </div>
            <div className='image'></div>
        </div>
    )
}

export default Login