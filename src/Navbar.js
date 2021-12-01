import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Carefree Louisiana</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link
          to="/create"
          style={{
            color: "white",
            backgroundColor: "#034694",
            borderRadius: "8px",
          }}
        >
          New post
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
