import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route, Link
} from "react-router-dom";
import { About } from './components/About';
import { Login } from './components/Login';
import { Students } from './components/Students';




export const App = () => {
  

  return (
  
    <Router>
      <div className='nav'>
        <nav className='navigation'>
          
            <Link className='link' to='/student' element={<Students />}>Alumnos</Link>
            <Link className='link' to='/about' element={<About />}>About</Link>
            <Link className='link' to='/login' element={<Login />}>Login</Link>
         
            
            
        </nav>
      </div>
      <div>
        <Routes>
            <Route path='/students' element={<Students />} />
            <Route path='/about' element={<About />} />
            <Route path='/login' element={<Login />} />
            <Route path='*' element={<Students/>} />

          </Routes>
      </div>
    </Router>
 
     
  )
}
