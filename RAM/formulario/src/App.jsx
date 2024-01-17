import Form from './components/form/Form'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import OtroModulo from './components/otroModulo/OtroModulo'
import { useState } from 'react'

function App() {
 
  
  return (
    <div className='App'>
      <Routes>
        <Route path='/form' element={<Form/>} />
        <Route path='/otroModulo' element={<OtroModulo/>} />
      </Routes>
    </div>
        )
}

export default App
