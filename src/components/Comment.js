import React, { useState, useEffect } from 'react'
import { Avatar } from "@material-ui/core";

function Comment(props) {
  return (
    <div className='msgcell'>
      <Avatar/>
      <div className="cellinfo">
        <h4>{props.username}</h4>
        <p>{props.message}</p>
      </div>
    </div>
  )
}

export default Comment