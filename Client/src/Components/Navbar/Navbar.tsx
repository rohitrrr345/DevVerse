import { Link } from "react-router-dom";
const Navigation = () => {

    return (
      <nav className="container">
        <div className="logo flex items-center">
          <img src="/images/brand_logo.png" alt="" />
          <p>DevVerse</p>
        </div>
        <ul>
          
          <Link to="/About" className="rem">About</Link>
          <Link to="/Contact" className="rem" >Contact</Link>
        </ul>
  
        <button>Login</button>
      </nav>
    );
  };
  
  export default Navigation;