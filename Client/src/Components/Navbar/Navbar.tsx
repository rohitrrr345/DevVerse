import { Link } from "react-router-dom";
const Navigation = () => {

    return (
      <nav className="container">
        <div className="logo flex items-center">
          <img src="/images/brand_logo.png" alt="" />
          <p>DevVerse</p>
        </div>
        <ul>
          
          <Link to="/About">About</Link>
          <Link to="/Contact">Contact</Link>
        </ul>
  
        <button>Login</button>
      </nav>
    );
  };
  
  export default Navigation;