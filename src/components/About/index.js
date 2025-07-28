import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import Loader from 'react-loaders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAngular,
  faGitAlt,
  faHtml5,
  faCss3,
  faReact,
  faJsSquare,
  faShopify,
  faWix,
} from '@fortawesome/free-brands-svg-icons'

const About = () => {
  const aboutArray = 'About Me'.split('')

  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={aboutArray}
              idx={15}
            />
          </h1>
          <p>
            Hi! I’m a self-motivated and detail-oriented web developer with a
            passion for turning ideas into interactive, user-friendly websites.
            I’ve gained hands-on experience in web design through building and
            customizing websites using platforms like Shopify, Squarespace and
            Wix-- helping clients bring their ideas to life with clean layouts
            and intuitive user experiences.
          </p>
          <p>
            Recently, I’ve deepened my front-end development skills with HTML,
            CSS, JavaScript and React, and built a growing portfolio of
            responsive websites and dynamic web apps. I love solving problems,
            learning new tools and writing clean, efficient code.
          </p>
          <p>
            When I’m not coding, you’ll find me playing volleyball, hiking in
            the mountains or dancing at the next music festival!
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faWix} color="#000000" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faShopify} color="#95BF47" />
            </div>
          </div>
        </div>
      </div>

      <Loader type="line-scale-pulse-out" />
    </>
  )
}

export default About
