
import './navBar.scss';
import { Link } from 'react-router-dom';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import PersonalOutLineIcon from '@mui/icons-material/PersonOutline';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
const NavBar = () => {
  return (
    <div className='navBar'>

      <div className="left">
        <Link to="/" style={{ textDecoration: 'none',}}>
        <span>CairoSocial</span>
        </Link>
        <HomeOutlinedIcon className='icon' />
        <DarkModeOutlinedIcon className='icon' />
        <GridViewOutlinedIcon className='icon' />
            <div className="search">
              <SearchOutlinedIcon />  
              <input type="text" placeholder='Search...' />
            </div>
      </div>

      <div className="right">
        <PersonalOutLineIcon className='icon' />
        <NotificationsOutlinedIcon className='icon' />
        <MailOutlineOutlinedIcon className='icon' />
      <div className="user">
        <img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg" alt="profile picture" />
        <span>John Doe</span>
        </div>
      </div>

    </div>
  )
}

export default NavBar;