import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import './index.scss'
import LogoM from '../../assets/images/logo-m.png'
import LogoSub from '../../assets/images/logo_sub.png'

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
    </div>
  )
}
