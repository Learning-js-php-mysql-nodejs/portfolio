import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/button'
import Router from './router/Router'
import { UserContextProvider } from './context'


function App() {

  return (
    <UserContextProvider >
  <Router />
  </UserContextProvider>
  )
}

export default App
