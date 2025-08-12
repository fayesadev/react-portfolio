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
  
  const closeNav = () => setShowNav(false)
  
  return (
    <div className="nav-bar">
      {/* Desktop/Mobile Navigation */}
      <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink exact="true" activeclassname="active" to="/" onClick={closeNav}>
          Home
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
          onClick={closeNav}
        >
          About
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="resume-link"
          target="_blank"
          to="https://flowcv.com/resume/rdsgiel4le"
          onClick={closeNav}
        >
          Resume
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="portfolio-link"
          to="/portfolio"
          onClick={closeNav}
        >
          Portfolio
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
          onClick={closeNav}
        >
          Contact
        </NavLink>
      </nav>

      {/* Close icon - moved outside of nav */}
      {showNav && (
        <FontAwesomeIcon
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#988FB2"
          size="3x"
          className="close-icon"
        />
      )}

      {/* Hamburger menu icon - only show when nav is closed */}
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
