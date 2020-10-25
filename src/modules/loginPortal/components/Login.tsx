import React from 'react'
import { useForm } from 'react-hook-form'
import { makeStyles } from '@material-ui/core/styles'
import {
  Container,
  InputAdornment,
  Button,
  CssBaseline,
  TextField,
  Grid,
  Link,
  Typography,
} from '@material-ui/core'

import { NavLink } from 'react-router-dom'
import { AiOutlineUser } from 'react-icons/ai'
import { RiLockPasswordLine } from 'react-icons/ri'
import img from 'assets/images/OCSC-banner.png'
import * as yup from 'yup'

const useStyles = makeStyles((theme) => ({
  input: {
    color: '#0f1626',
    fontWeight: 700,
    '& .MuiInputBase-root.MuiOutlineInput-root': {
      color: '#45A29E',
      borderColor: '#757575',
      fontWeight: 700,
    },
  },
  textfield: {
    marginTop: 10,

    '& .MuiFormHelperText-root.Mui-error ': {
      color: 'ff533d',
      fontWeight: 700,
      borderWidth: '3px',
    },
    '& .MuiInput-underline.Mui-error:after': {
      borderColor: 'ff533d',
      borderWidth: '3px',
    },
    '& label.MuiFormLabel-root': {
      fontWeight: 700,
      '&:after .Mui-error': {
        borderColor: '#ff533d',
        borderWidth: '3px',
      },
    },
    '& label.Mui-focused': {
      color: '#132740',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#ffae0c',
    },
    '& .MuiOutlinedInput-root': {
      borderWidth: '3px',
      '& fieldset': {
        borderColor: '#ffae0c',
        borderWidth: '2px',
      },
      '&:hover fieldset': {
        borderColor: '#a8c6ff',
        borderWidth: '3px',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#a8c6ff',
        borderWidth: '3px',
      },
      '&.Mui-error .MuiOutlinedInput-notchedOutline': {
        borderColor: '#ff533d',
        borderWidth: '3px',
      },
    },
  },
  paper: {
    marginTop: theme.spacing(4),
    display: 'flex',
    padding: 10,
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    width: theme.spacing(7),
    height: theme.spacing(7),

    backgroundColor: theme.palette.secondary.main,
  },

  submit: {
    marginTop: '10px',
    background: '#ff533dcf',
    borderRadius: 20,
    padding: 8,
    color: '#fdfdfd',
    '&:hover': {
      background: '#ff533d',
    },
  },
  etda: {
    marginTop: '10px',
    background: '#4d74bbba',
    borderRadius: 20,
    padding: 8,
    color: '#fdfdfd',
    '&:hover': {
      background: '#4d74bb',
    },
  },
  container: {
    display: 'flex',
    alignItems: 'center',
  },

  border: {
    borderBottom: '1px solid darkgray',
    width: '100%',
  },

  content: {
    padding: ' 0 10px 0 10px',
  },
  divider: {
    marginTop: '20px',
  },
  textdivider: {
    color: 'royalblue',
  },
  nav: {
    color: 'inherit',
    textDecoration: 'inherit',
  },
  form: {
    background: 'white',
    borderRadius: '10px',
    height: '100%',
    marginTop: '20px',
  },
  font: {
    fontWeight: 700,
    color: '#0f1726',
  },
  image: {
    margin: 10,
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '50%',
  },
}))

export default function SignIn() {
  const classes = useStyles()
  const { register, handleSubmit, errors } = useForm({
    mode: 'onBlur',
    validationSchema: yup.object().shape({
      user: yup.string().required(),
      password: yup.string().required(),
    }),
  })
  const submit = (loginInfo: object) => {
    console.log(loginInfo)
  }

  return (
    <Container component="main" maxWidth="xs">
      <form
        onSubmit={handleSubmit(submit)}
        autoComplete="off"
        className={classes.form}
      >
        <CssBaseline />
        <div className={classes.paper}>
          <img alt="banner" src={img} className={classes.image} />
          <Typography component="h1" variant="h5" className={classes.font}>
            Learning Portal
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              className={classes.textfield}
              InputProps={{
                className: classes.input,
                startAdornment: (
                  <InputAdornment position="start">
                    <AiOutlineUser size={24} />
                  </InputAdornment>
                ),
              }}
              fullWidth
              label="เลขประจำตัวประชาชน"
              inputRef={register}
              name="user"
              helperText={errors.user ? 'กรุณากรอกเลขประจำตัวประชาชน' : ''}
              error={!!errors.user}
            />
            <TextField
              className={classes.textfield}
              variant="outlined"
              fullWidth
              id="input-with-icon-textfield"
              label="รหัสผ่าน"
              type="password"
              inputRef={register}
              name="password"
              helperText={errors.password ? 'กรุณากรอกรหัสผ่าน' : ''}
              error={!!errors.password}
              InputProps={{
                className: classes.input,
                startAdornment: (
                  <InputAdornment position="start">
                    <RiLockPasswordLine size={24} />
                  </InputAdornment>
                ),
              }}
            />

            <Button type="submit" fullWidth className={classes.submit}>
              เข้าสู่ระบบ
            </Button>

            <Grid container>
              <Grid item xs>
                <NavLink to="/learning-portal/forget" className={classes.nav}>
                  <Link variant="body2">ลืมรหัสผ่าน?</Link>
                </NavLink>
              </Grid>
              <Grid item>
                <NavLink to="/learning-portal/signup" className={classes.nav}>
                  <Link variant="body2">{'สมัครสมาชิก'}</Link>
                </NavLink>
              </Grid>
            </Grid>
            <div className={classes.container}>
              <div className={classes.border} />
              <span className={classes.content}>
                <h3 className={classes.textdivider}>OR</h3>
              </span>
              <div className={classes.border} />
            </div>

            <Button type="submit" fullWidth className={classes.etda}>
              LOGIN WITH ETDA CONNECT
            </Button>
          </form>
        </div>
      </form>
    </Container>
  )
}
