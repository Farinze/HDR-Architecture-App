import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './Pages/Landing'

export default function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}


