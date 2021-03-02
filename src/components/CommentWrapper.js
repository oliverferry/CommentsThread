import React, { useState, useEffect } from 'react'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import { Button, IconButton } from '@material-ui/core';
import Comment from './Comment'

function CommentWrapper(props) {
  const [numLikes, changenumLikes] = useState(0)

  return (
    <div className='comment'>
      <Comment username={props.username} message={props.message} />
      <div className="buttonsBar">
        <IconButton aria-label="thumbsup" onClick={e => changenumLikes(numLikes + 1)}>
          <ThumbUpIcon fontSize="small" />
        </IconButton>
        <Button id="likesLabel" disabled={true}>
          {numLikes}
        </Button>
        <IconButton aria-label="thumbsup" onClick={e => changenumLikes(numLikes - 1)}>
          <ThumbDownIcon fontSize="small" />
        </IconButton>
        {
          props.depth < 2 &&
          <Button size="small" onClick={props.replyPressed}>
            Reply
        </Button>
        }
      </div>
    </div>
  )
}

export default CommentWrapper