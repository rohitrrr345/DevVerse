import './App.css'
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>

        <Routes>
          <Route path='/' element={ <Navbar />}/>
          <Route path='/' element={<Hero/> } />

          
       
              
   
       </Routes>
      </Router>
  )
}

export default App