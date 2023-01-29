import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import './index.scss'
import LogoM from '../../assets/images/logo-m.png'
import LogoSub from '../../assets/images/logo_sub.png'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function index() {

  // const classNameFunc = ({ isActive } : {isActive: any}) => ( isActive ? 'active' : '')

  return (
    <div className='nav-bar'>
      <Link className='logo' to='/'>
        <img src={ LogoM } alt='logo' />
        <img src={ LogoSub } className='sub-logo' alt='matthew' />
      </Link>
      <nav>
        <NavLink to='/'>
          <FontAwesomeIcon icon={ faHome } color='#4d4d4e' />
        </NavLink>
        <NavLink className='about-link' to='/about'>
          <FontAwesomeIcon icon={ faUser } color='#4d4d4e' />
        </NavLink>
        <NavLink className='contact-link' to='/contact'>
          <FontAwesomeIcon icon={ faEnvelope } color='#4d4d4e' />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a 
            target='_blank' 
            rel='noreferrer' 
            href='https://www.linkedin.com/in/matthew-weil-029657254/'
          >
            <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
          </a>
        </li>
        <li>
          <a 
            target='_blank' 
            rel='noreferrer' 
            href='https://github.com/mEWeil'
          >
            <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
          </a>
        </li>
      </ul>
    </div>
  )
}
