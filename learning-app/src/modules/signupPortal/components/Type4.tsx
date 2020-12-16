import React from 'react'

import { TextField, MenuItem, FormControl } from '@material-ui/core'
import { Controller } from 'react-hook-form'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  input: {
    color: '#0f1626',
    fontWeight: 600,
    '& .MuiInputBase-root.MuiOutlineInput-root': {
      color: '#45A29E',
      borderColor: '#757575',
      fontWeight: 600,
    },
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
}))

export default function SignIn(props: any) {
  const classes = useStyles()

  const { formProps } = props

  return (
    <>
      <FormControl fullWidth>
        <h4> บุคคลทั่วไป</h4>
        <Controller
          as={
            <TextField
              variant="outlined"
              fullWidth
              className={classes.textfield}
              label="อาชีพ"
              InputLabelProps={{
                className: classes.selectInput,
              }}
              select
              helperText={
                formProps.errors.OccupationId &&
                formProps.errors.OccupationId.message
              }
              error={!!formProps.errors.OccupationId}
            >
              {' '}
              <MenuItem value={'เอกชน'}>เอกชน</MenuItem>
              <MenuItem value={'ประชาชน'}>ประชาชน</MenuItem>
              <MenuItem value={'นิสิต'}>นิสิต</MenuItem>
            </TextField>
          }
          name="OccupationId"
          rules={{ required: 'กรุณาเลือกอาชีพ' }}
          control={formProps.control}
          defaultValue=""
        />

        <FormControl fullWidth>
          <TextField
            fullWidth
            label="ตำแหน่ง"
            name="jobTitle"
            variant="outlined"
            className={classes.textfield}
            InputProps={{
              className: classes.input,
            }}
            inputRef={formProps.register}
            helperText={
              formProps.errors.jobTitle && formProps.errors.jobTitle.message
            }
            error={!!formProps.errors.jobTitle}
          />
          <TextField
            fullWidth
            label="ชื่อหน่วยงาน"
            name="workPlace"
            inputRef={formProps.register}
            variant="outlined"
            className={classes.textfield}
            InputProps={{
              className: classes.input,
            }}
            helperText={
              formProps.errors.workPlace && formProps.errors.workPlace.message
            }
            error={!!formProps.errors.workPlace}
          />
        </FormControl>
      </FormControl>
    </>
  )
}