import './App.css'
import Dashboard from './Components/Dashboard/Dashboard';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
       {/* <Navbar/> */}
        <Routes>
          <Route path='/' element={<Dashboard/> } />

          
       
              
   
       </Routes>
      </Router>
  )
}

export default App