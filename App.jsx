import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Movies } from './Components/Movies/Movies'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import { Nav } from './Components/Nav/Nav.jsx'
function App() {


  return (
    <>
      <Nav/>
      <Movies />
    </>
  )
}

export default App
