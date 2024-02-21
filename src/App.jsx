import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage'
import Header from './components/Header'
import { useState } from 'react'
import Footer from './components/Footer'


function App() {
const [tag,setTag] = useState('Travel')


  return (
    <div>
       <BrowserRouter>
     
       <Header/>
        <Routes>
          
            <Route path='/' element={<HomePage tag={tag} setTag={setTag}/>}/>
            
        </Routes>
        <Footer/>
      </BrowserRouter>
       
     </div>
  )
}

export default App
