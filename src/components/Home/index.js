import { useState, useEffect } from 'react'
import { Link } from 'react-router'
import Loader from 'react-loaders'
import LogoTitle from '../../assets/images/logo-s.png'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const firstArray = "Hey, I'm Faye".split('')
  const nameArray = 'Web developer &'.split('')
  const jobArray = 'web designer.'.split('')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1 className="sub-header">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={firstArray}
              idx={10}
            />
          </h1>
          <br />
          <h1 className="header">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Frontend Developer | Freelancer</h2>
          <div className='contact'>
            <Link to="/contact" className="flat-button">
              Contact Me
            </Link>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/fayesadev"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" color="#7E4AE7" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/dumbrigue/"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x"color="#7E4AE7" />
            </a>
          </div>
        </div>
        <Logo />
      </div>
      <Loader type="line-scale-pulse-out" />
    </>
  )
}

export default Home
