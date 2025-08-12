import { Link, NavLink } from 'react-router'
import './index.scss'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faHome,
  faUser,
  faFile,
  faFolderOpen,
  faBars,
  faClose,
} from '@fortawesome/free-solid-svg-icons'
import fayelogocolor from '../../assets/images/fayelogocolor.png'

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false)
  return (
    <div className="nav-bar">
      {/* <Link className="logo" to="/" onClick={() => setShowNav(false)}>
        <img src={fayelogocolor} alt="Logo" />
      </Link> */}

      <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink exact="true" activeclassname="active" to="/">
          {/* <FontAwesomeIcon icon={faHome} color="#988FB2" /> */}
          Home
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          {/* <FontAwesomeIcon icon={faUser} color="#988FB2" /> */}
          About
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="resume-link"
          target="_blank"
          to="https://flowcv.com/resume/rdsgiel4le"
        >
          {/* <FontAwesomeIcon icon={faFile} color="#988FB2" /> */}
          Resume
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="portfolio-link"
          to="/portfolio"
        >
          {/* <FontAwesomeIcon icon={faFolderOpen} color="#988FB2" /> */}
          Portfolio
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          {/* <FontAwesomeIcon icon={faEnvelope} color="#988FB2" /> */}
          Contact
        </NavLink>
      </nav>

      {showNav && (
        <FontAwesomeIcon
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#988FB2"
          size="3x"
          className="close-icon"
        />
      )}

      {!showNav && (
        <FontAwesomeIcon
          onClick={() => setShowNav(true)}
          icon={faBars}
          color="#988FB2"
          size="3x"
          className="hamburger-icon"
        />
      )}
    </div>
  )
}

export default Sidebar
