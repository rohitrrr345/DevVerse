import './App.css'
import Dashboard from './Components/Dashboard/Dashboard';
import Docs from './Components/Docs/Docs';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PdfPreview from './Components/Pdfcard/PdfPreview';
import Profile from './Components/Profile/Profile';

const App = () => {
  return (
    <Router>
       {/* <Navbar/> */}
        <Routes>
          <Route path='/' element={<Dashboard/> } />
          <Route path="/docsarray" element={<Docs/>} />
          <Route path="/preview" element={<PdfPreview/>} />
          <Route path="/profile" element={<Profile/>}/>

          
       
              
   
       </Routes>
      </Router>
  )
}

export default App