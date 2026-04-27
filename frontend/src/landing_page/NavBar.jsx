import { Link } from "react-router-dom";  

export default function Navbar() {
  return (
    <header className="mb-5">
    <div>
      <nav className="navbar navbar-expand-lg navbar-light p-3 border-bottom bg-white fixed-top">
        <Link className="" to="/">
          <img src="media/logo.svg" alt="Logo" style={{ width: '25%' }} />
        </Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active ms-5">
              <Link className="nav-link" to="/Signup">
                Signup <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item ms-3">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item ms-3">
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>
            <li className="nav-item ms-3">
              <Link className="nav-link" to="/pricing">
                Pricing
              </Link>
            </li>
            <li className="nav-item ms-3">
              <Link className="nav-link" to="/support ">
                Support
              </Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            
            
          </form>
        </div>
      </nav>
    </div>
    </header>
  );
}
