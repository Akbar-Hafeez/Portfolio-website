import { useState } from 'react'
import 'animate.css';
import './App.css'
import BgSnippet from './components/BgSnippet'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Project from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'
import {
  BrowserRouter as Router,
 Routes,
  Route,
  } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
    <BgSnippet/>
    
    <Navbar/>
    <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route exact path='/about' element={<About/>}/>
    <Route exact path='/project' element={<Project/>}/>
    <Route exact path='/contact' element={<Contact/>}/>
    </Routes>
    <Footer/>
    
    </Router>

    </>
  )
}

export default App
