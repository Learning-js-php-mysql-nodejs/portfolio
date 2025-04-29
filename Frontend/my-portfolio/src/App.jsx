import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/button'
import Router from './router/Router'
import { UserContextProvider } from './context'
import toast, { Toaster } from 'react-hot-toast';

function App() {

  return (
    <UserContextProvider >
  <Router />
  <Toaster />
  </UserContextProvider>
  )
}

export default App
