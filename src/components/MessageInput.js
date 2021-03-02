import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';


function MessageInput({ handleSubmit }) {
  const [userInput, changeUserInput] = useState('')
  const [messageInput, changeMessageInput] = useState('')

  const canSend = () => {
    return (messageInput.length > 0 && userInput.length > 0)
  }

  const messageEntered = (e) => {
    changeUserInput('')
    changeMessageInput('')
    handleSubmit({
      username: userInput,
      message: messageInput
    })
  }

  return (
    <form className='messageInput'>
      <div className='userItem'>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <AccountCircle />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="Username" autoComplete='off'
              value={userInput} onChange={e => changeUserInput(e.target.value)} />
          </Grid>
        </Grid>
      </div>
      <div className='inputItem'>
        <TextField id="outlined-basic" variant="outlined" placeholder="add a comment"
          autoComplete='off' fullWidth={true}
          value={messageInput} onChange={e => changeMessageInput(e.target.value)} />
      </div>
      <div className='addMsg'>
        <Button variant="contained" color="primary" disabled={!canSend()} onClick={messageEntered}>
          Add Comment
        </Button>
      </div>
    </form>
  )
}

export default MessageInput;