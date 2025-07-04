import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function Navbar() {
  const { isLogin } = useContext(AuthContext);

  return (
    <nav className="nav-bar">
      <Link to="/">Home</Link>

      {!isLogin && (
        <>
          {" | "}
          <Link to="/login">Login</Link> |{" "}
          <Link to="/register"  className="nav-link">Register</Link>
        </>
      )}

      {isLogin && (
        <>
          {" | "}
          <Link to="/hand-over">Hand Over</Link> |{" "}
          <Link to="/pick-up">Pick Up</Link>
        </>
      )}
    </nav>
  );
}