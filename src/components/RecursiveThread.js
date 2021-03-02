import React, { useState, useEffect } from 'react'
import CommentWrapper from './CommentWrapper'
import MessageInput from './MessageInput'

function RecursiveThread(props) {
  const [messages, changeMessages] = useState([]);
  const [isReply, changeIsReply] = useState(false)

  const handleReply = (e) => {
    changeIsReply(!isReply)
  }

  const commentAdded = (newMessage) => {
    changeMessages([...messages, newMessage])
    changeIsReply(false)
  }

  return (
    <div className='recursiveThread' 
    style={{marginLeft: `${(props.depth===0)? 0 : 50}px`}}>
      <CommentWrapper
        username={props.username}
        message={props.message}
        replyPressed={handleReply} 
        depth={props.depth}
      />
      {isReply && <MessageInput handleSubmit={commentAdded}/>}
      {
        messages.map((msg, i) => (
          <RecursiveThread
            depth={props.depth+1}
            key={i}
            username={msg.username}
            message={msg.message}
          />
        ))
      }

    </div>
  )
}

export default RecursiveThread