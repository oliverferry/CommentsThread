import React from 'react'
import MessageInput from './MessageInput'
import CommentWrapper from './CommentWrapper'
import ParentThread from './ParentThread'
import './App.css'
import { Container } from '@material-ui/core'

const App = () => (
  <div className='app'>
    <Container maxWidth="md">
      <ParentThread/>
    </Container>
  </div>

)
export default App
