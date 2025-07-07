import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function Navbar() {
  const { isLogin, logout } = useContext(AuthContext);

  return (
    <nav className="nav-bar">

      {!isLogin && (
        <>
          <Link to="/">Home</Link>|{" "}
          <Link to="/login">Login</Link> |{" "}
          <Link to="/register" className="nav-link">Register</Link>
        </>
      )}

      {isLogin && (
        <>
          <Link to="/hand-over">Hand Over</Link> |{" "}
          <Link to="/pick-up">Pick Up</Link> {" "}
          <Link to="/"><button onClick={logout} className='logout-button'>Logout</button></Link>  
        </>
      )}
    </nav>
  );
}