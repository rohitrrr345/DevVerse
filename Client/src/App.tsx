import './App.css'
import Dashboard from './Components/Dashboard/Dashboard';
import Docs from './Components/Docs/Docs';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PdfPreview from './Components/Pdfcard/PdfPreview';
import Profile from './Components/Profile/Profile';
import Contact from './Components/Contact/Contact';
import Notification from './Components/Notifications/Notification';
import Login from './Components/SignUp/SignUp';
import Signin from './Components/Login/Login';

const App = () => {
  return (
    <Router>
        <Routes>

          <Route path='/home' element={<Hero/> } />
          <Route path="/courses/" element={<Dashboard/>} />

          <Route path="/Courses/docsarray/" element={<Docs/>} />
          <Route path="/preview" element={<PdfPreview/>} />
          <Route path="/profile" element={<Profile/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path='/notifications' element={<Notification/>}/>
        <Route path='/signup' element={<Login/>}/>
        <Route path='/login' element={<Signin/>}/>

          
       
              
   
       </Routes>
      </Router>
  )
}

export default App