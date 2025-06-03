import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import portfolioData from '../../data/portfolio.json'
import Loader from 'react-loaders'

const Portfolio = () => {
  const portfolioArray = 'My Projects'.split('');

  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container portfolio-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={portfolioArray}
              idx={15}
            />
          </h1>
          <div></div>

        </div>
      </div>
      <Loader type="line-scale-pulse-out" />
    </>
  )
}

export default Portfolio
