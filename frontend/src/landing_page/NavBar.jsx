import { Link } from "react-router-dom";  

export default function Navbar() {
  return (
    <header className="mb-5">
    <div>
      <nav class="navbar navbar-expand-lg navbar-light p-3 border-bottom bg-white fixed-top">
        <Link class="" to="/">
          <img src="media/logo.svg" alt="Logo" style={{ width: '25%' }} />
        </Link>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active ms-5">
              <Link class="nav-link" to="/Signup">
                Signup <span class="sr-only">(current)</span>
              </Link>
            </li>
            <li class="nav-item ms-3">
              <Link class="nav-link" to="/about">
                About
              </Link>
            </li>
            <li class="nav-item ms-3">
              <Link class="nav-link" to="/products">
                Products
              </Link>
            </li>
            <li class="nav-item ms-3">
              <Link class="nav-link" to="/pricing">
                Pricing
              </Link>
            </li>
            <li class="nav-item ms-3">
              <Link class="nav-link" to="/support ">
                Support
              </Link>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            
            
          </form>
        </div>
      </nav>
    </div>
    </header>
  );
}
