import React from 'react'
import { TextField, MenuItem, FormControl } from '@material-ui/core'
import { Controller } from 'react-hook-form'
import { makeStyles } from '@material-ui/core/styles'
import Date from './DatePickerJob'
const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
    padding: theme.spacing(1),
  },
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(2),
    minWidth: 120,
  },
  formControlInfo: {
    margin: theme.spacing(2),
    paddingRight: theme.spacing(4),
    marginBottom: 0,
    marginTop: 0,
  },
  formControlDate: {
    margin: theme.spacing(2),
  },
  font: {
    color: 'rgba(0, 0, 0, 0.54)',
    fontWeight: 500,
    paddingTop: 0,
    marginTop: 0,
    paddingBottom: 1,
    marginBottom: 1,
  },
  marginDate: {
    paddingLeft: theme.spacing(2),
    margin: theme.spacing(0),
    paddingTop: 0,
    marginTop: 0,
    paddingBottom: 4,
    marginBottom: 4,
  },
  selectInput: {
    color: '#757575',
    fontWeight: 600,
    '& .MuiInputBase-root.MuiOutlineInput-root': {
      color: '#45A29E',
      borderColor: '#757575',
      fontWeight: 600,
    },
  },
  input: {
    color: '#0f1626',
    fontWeight: 600,
    '& .MuiInputBase-root.MuiOutlineInput-root': {
      color: '#45A29E',
      borderColor: '#757575',
      fontWeight: 600,
    },
  },
  textfield: {
    marginTop: 10,
    '& .MuiFormHelperText-root.Mui-error ': {
      color: 'ff533d',
      fontWeight: 600,
      borderWidth: '1px',
    },
    '& .MuiInput-underline.Mui-error:after': {
      borderColor: 'ff533d',
      borderWidth: '1px',
    },
    '& label.MuiFormLabel-root': {
      fontWeight: 600,
      '&:after .Mui-error': {
        borderColor: '#ff533d',
        borderWidth: '1px',
      },
    },
    '& label.Mui-focused': {
      color: '#132740',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#f9b122',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#f9b122',
        borderWidth: '1px',
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
        borderWidth: '1px',
      },
    },
  },
  form: {
    marginTop: theme.spacing(4),
    width: '100%', // Fix IE 11 issue.
  },
}))

export default function SignIn(props: any) {
  const classes = useStyles()

  const { formProps } = props

  return (
    <>
      <FormControl fullWidth>
        <h4>
          สำหรับข้าราชการพลเรือน ข้าราชการประเภทอื่น
          หรือเจ้าหน้าที่ของรัฐในส่วนราชการต่าง ๆ
        </h4>
      </FormControl>

      <Date
        title={'วันที่รับราชการ'}
        register={formProps.register}
        name={'jobDate'}
      />

      <Controller
        as={
          <TextField
            variant="outlined"
            fullWidth
            className={classes.textfield}
            label="กระทรวง"
            InputLabelProps={{
              className: classes.selectInput,
            }}
            select
            helperText={
              formProps.errors.MinistryId && formProps.errors.MinistryId.message
            }
            error={!!formProps.errors.MinistryId}
          >
            <MenuItem value={'ข้าราชการทหาร'}>ข้าราชการทหาร</MenuItem>
            <MenuItem value={'ข้าราชการฝ่ายตุลา'}>ข้าราชการฝ่ายตุลา</MenuItem>
            <MenuItem value={'ข้าราชการตำรวจ'}>ข้าราชการตำรวจ</MenuItem>
          </TextField>
        }
        name="MinistryId"
        rules={{ required: 'กรุณาเลือกประเภทตำแหน่ง' }}
        control={formProps.control}
        defaultValue=""
      />

      <Controller
        as={
          <TextField
            variant="outlined"
            fullWidth
            className={classes.textfield}
            label="กรมต้นสังกัด"
            InputLabelProps={{
              className: classes.selectInput,
            }}
            select
            helperText={
              formProps.errors.DepartmentId &&
              formProps.errors.DepartmentId.message
            }
            error={!!formProps.errors.MinistryId}
          >
            {' '}
            <MenuItem value={'กรม1'}>กรม1</MenuItem>
            <MenuItem value={'กรม2'}>กรม2</MenuItem>
            <MenuItem value={'กรม3'}>กรม3</MenuItem>
          </TextField>
        }
        name="DepartmentId"
        rules={{ required: 'กรุณาเลือกกรมที่สังกัด' }}
        control={formProps.control}
        defaultValue=""
      />

      <TextField
        fullWidth
        label="ชื่อส่วนราชการที่สังกัด"
        name="Division"
        variant="outlined"
        className={classes.textfield}
        InputProps={{
          className: classes.input,
        }}
        inputRef={formProps.register}
        helperText={
          formProps.errors.Division ? formProps.errors.Division.message : ''
        }
        error={!!formProps.errors.Division}
      />
    </>
  )
}