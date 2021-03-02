import React, { useState, useEffect } from 'react'
import CommentWrapper from './CommentWrapper'
import MessageInput from './MessageInput'
import RecursiveThread from './RecursiveThread';

function ParentThread(props) {
  const [messages, changeMessages] = useState([]);

  const commentAdded = (newMessage) => {
    changeMessages([...messages, newMessage])
  }

  return (
    <div className='parentThread'>
      <MessageInput handleSubmit={commentAdded} />
      {
        messages.map((msg, i) => (
          <RecursiveThread
            depth={0}
            key={i}
            username={msg.username}
            message={msg.message}
          />
        ))
      }
    </div>
  )
}

export default ParentThread