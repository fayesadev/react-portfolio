import { Link } from 'react-router';
import LogoTitle from '../../assets/images/logo-s.png';
import './index.scss';

const Home = () => {
  
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>Hi, <br /> I'm
        <img src={LogoTitle} alt="developer" />
        lobodan
        <br />
        web developer
        </h1>
        <h2>Frontend Developer / JavaScript Expert / YouTuber</h2>
        <Link to="/contact" className='flat-button'>CONTACT ME</Link>
      </div>
    </div>
  )
}

export default Home