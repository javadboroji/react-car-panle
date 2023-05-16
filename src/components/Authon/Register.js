import React ,{useState}from 'react'
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

function Register() {
    const [inputRegister, setInputRegister] = useState({ userName:'', pass:'',email:'',company:''})
    const classes = useStyles();

    //handler inputs submit
    const inputOnchangeHandler =(e)=>{
        const{name , value}=e.target;
        setInputRegister({
            ...inputRegister,
            [name]:value
        })
    }
    const inputSubmit=()=>{
     console.log(inputRegister);
    }
    return (
        <div className='authon-box'>
            
            <div className='form'>
                <form className={classes.root} noValidate autoComplete="off">
                <div className='title'>
                    <span> ثبت نام </span>
                </div>
                    <Grid container spacing={2} sx={{ m: 'auto' }}>
                        <Grid item xs={12}  >
                            <TextField
                            name='userName'
                             id="outlined-name" 
                             label="نام" 
                             type="text" 
                             className='input-conFig-form'
                              variant="outlined" 
                              onChange={inputOnchangeHandler}
                              value={inputRegister.userName}
                              />
                        </Grid>
                        <Grid item xs={12} >
                            <TextField
                            name='pass'
                                id="outlined-password-pass"
                                label="پسورد"
                                type="password"
                                className='input-conFig-form'
                                autoComplete="current-password"
                                variant="outlined"
                                onChange={inputOnchangeHandler}
                                value={inputRegister.pass}
                            />
                        </Grid>
                        <Grid item xs={12} >
                            <TextField 
                            name='email'
                            id="outlined-email" 
                            label="ایمیل" 
                            type="email" 
                            className='input-conFig-form' 
                            variant="outlined" 
                            onChange={inputOnchangeHandler}
                            value={inputRegister.email}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField id="outlined-company"
                            name='company'
                             label="نام برند" 
                             type="text" 
                             className='input-conFig-form' 
                             variant="outlined" 
                             onChange={inputOnchangeHandler}
                             value={inputRegister.company}
                             />
                        </Grid>
                        <Grid xs={6}>
                            <Button className="btn-submit" variant="contained" color="success" onClick={inputSubmit} >
                               ثبت نام
                            </Button>
                        </Grid>

                    </Grid>
                </form>
            </div>
            <div className='image'></div>
        </div>
    )
}

export default Register