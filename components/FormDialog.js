import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

function FormDialog ({ handleCloseForm, isOpenForm }) {

  const handleClose = () => {
    handleCloseForm()
  }

  return (
    <>
      <Dialog
        open={isOpenForm}
        onClose={handleClose}
        aria-labelledby='form-dialog-title'
      >
        <DialogTitle id='form-dialog-title'>Ask a question</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Ask any question. Bla bla bla!!!
          </DialogContentText>
          <TextField
            margin='dense'
            id='name'
            label='Email Address'
            type='email'
            fullWidth
            variant='outlined'
          />

          <TextField
            margin='dense'
            id='phone'
            label='phone'
            type='text'
            fullWidth
            variant='outlined'
          />

          <TextField
            margin='dense'
            id='message'
            label='Message'
            type='text'
            fullWidth
            multiline
            rows='4'
            variant='outlined'
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            Cancel
          </Button>
          <Button variant='contained' onClick={handleClose} color='primary'>
            Go
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default FormDialog
