import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-bar">
    <ul className="nav-items-container">
      <li className="page-logo-and-wave-text">
        <img
          className="wave-image-icon"
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
          alt="wave"
        />
        <p className="wave-text-name">Wave</p>
      </li>
      <li className="nav-options-container">
        <p className="home-nav-option">
          <Link to="/" className="hyperlink-remover">
            Home
          </Link>
        </p>
        <p className="about-nav-option">
          <Link to="about" className="hyperlink-remover">
            About
          </Link>
        </p>
        <p className="contact-nav-option">
          <Link to="contact" className="hyperlink-remover">
            Contact
          </Link>
        </p>
      </li>
    </ul>
  </nav>
)

export default Header
