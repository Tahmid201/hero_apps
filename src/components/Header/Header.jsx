import logo from "../../assets/logo.png"
import { NavLink } from 'react-router';
import { IoLogoGithub } from "react-icons/io";
const Header = () => {
    // const [openMenu , setOpenMenu] = useState(false)
    return (
        <div className="navbar bg-white text-black shadow-sm mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-white">
        <li><NavLink to="/"  className="hover:text-blue-500">Home</NavLink></li>
        <li><NavLink to="/apps"  className="hover:text-blue-500">Apps</NavLink></li>
        <li><a>Installations</a></li>
      </ul>
    </div>
    <div className="flex items-center">
        <img className="hidden lg:block w-8 h-8" src={logo} alt="" />
        <a className="btn btn-ghost text-xl">Hero IO</a>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-black">
        <li><NavLink to="/"  className="hover:text-blue-500">Home</NavLink></li>
        <li><NavLink to="/apps"  className="hover:text-blue-500">Apps</NavLink></li>
        <li><NavLink to="/Installs"  className="hover:text-blue-500">Installations</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a href="https://github.com/Tahmid201" className='btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] '><IoLogoGithub />Contribute</a>
  </div>
  
</div>
    );
};

export default Header;