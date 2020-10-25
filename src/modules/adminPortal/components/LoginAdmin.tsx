import React from 'react'
import { useForm } from 'react-hook-form'
import { Button, Box } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'

import img from 'assets/images/OCSC-banner.png'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { useHistory } from 'react-router-dom'
import * as yup from 'yup'

const useStyles = makeStyles((theme) => ({
  root: { marginTop: '8rem' },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    margin: 10,
    color: '#132740',
  },
  submit: {
    background: '#ff533d',
    color: '#f5f5f5',
    margin: theme.spacing(3, 0, 2),
  },
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
    margin: theme.spacing(1),

    padding: theme.spacing(1),
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
  box: {
    width: '100%',
    borderRadius: 10,
  },
  title: {
    fontWeight: 700,
    margin: 10,
  },
  image: {
    margin: 10,
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '50%',
  },
  container: {
    background: '#f5f5f5',
    borderRadius: 10,
    padding: 10,
  },
}))

export default function SignIn() {
  const classes = useStyles()
  const history = useHistory()

  const { register, handleSubmit, errors } = useForm({
    mode: 'onChange',
    validationSchema: yup.object().shape({
      admin: yup.string().required(),
      password: yup.string().required(),
    }),
  })

  const submit = (adminInfo: object) => {
    console.log(adminInfo)
    history.push('/learning-portal/admins/main')
  }

  return (
    <div className={classes.root}>
      <Container component="main" maxWidth="xs" className={classes.container}>
        <Box>
          <img alt="banner" src={img} className={classes.image} />
          <Box className={classes.box}>
            <form className={classes.form} onSubmit={handleSubmit(submit)}>
              <CssBaseline />
              <div className={classes.paper}>
                <Typography
                  component="h1"
                  variant="h5"
                  className={classes.title}
                >
                  ระบบเจ้าหน้าที่ Learning-Portal
                </Typography>

                <TextField
                  variant="outlined"
                  margin="normal"
                  className={classes.textfield}
                  InputProps={{
                    className: classes.input,
                  }}
                  name="admin"
                  inputRef={register}
                  helperText={errors.admin ? 'กรุณากรอกเลขประจำตัวประชาชน' : ''}
                  error={!!errors.admin}
                  fullWidth
                  label="เลขประจำตัวบัตรประชาชน"
                  autoComplete="admin"
                  autoFocus
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  className={classes.textfield}
                  InputProps={{
                    className: classes.input,
                  }}
                  name="password"
                  inputRef={register}
                  helperText={errors.password ? 'กรุณากรอกรหัสผ่าน' : ''}
                  error={!!errors.password}
                  fullWidth
                  label="รหัสผ่าน"
                  autoComplete="password"
                  autoFocus
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  className={classes.submit}
                >
                  ลงชื่อเข้าสู่ระบบ
                </Button>
              </div>
            </form>
          </Box>
        </Box>
      </Container>
    </div>
  )
}
