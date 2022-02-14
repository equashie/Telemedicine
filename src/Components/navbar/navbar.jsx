import React,{useState ,useContext} from 'react';
import './navbar.css';
import { RiMenu3Line, RiCloseLin } from 'react-icons/ri';
import logo from '../../assets/logo.png'
import myApp from '../../Auth/App';

const Navbar = () => {
  const{ switchToSignin} = useContext(myApp);
  
  return <div className='navbar'>
    <div className='navbar-links'>
      <div >
        <h3 className='navbar-links_logo'>Logo</h3>
      </div>
      <div className='navbar_links_container'>
        <p><a href='#home'> Home</a></p>
        <p><a href='#what'> What We Treat</a></p>
        <p><a href='#possibility'> Help</a></p>
        <p><a href='#home'> (202) 231-4322</a></p>
        <p><a href='#home'> </a></p>

      </div>
      <div className='navbar-sign'>

        <p>

          Sign in
        </p>
        <button type="button"><a href="#" onClick ={switchToSignin}>Sign Up</a></button>
        
      </div>
      <div className='navbar-menu'></div>

    </div>
  </div>;
};

export default Navbar
