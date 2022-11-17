import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Groovy Movies</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/yourmovies">Your Movies</Link>
        <Link to="/create" style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }}>New Movie</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;