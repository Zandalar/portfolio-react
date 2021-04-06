import React from 'react';
import logo from '../images/logo2.png'

function Header() {
	return (
		<header className='header'>
			<img className='header__logo' src={logo} alt='logo' />
      <nav className='header__menu'>
        <ul className='header__menu-list'>
          <li className='header__menu-item'><a className='header__menu-button' data-content="Link Hover" href='#section__home'>Home</a></li>
          <li className='header__menu-item'><a className='header__menu-button' data-content="Link Hover" href='#section__about'>About me</a></li>
          <li className='header__menu-item'><a className='header__menu-button' data-content="Link Hover" href='#section__skills'>Skills</a></li>
          <li className='header__menu-item'><a className='header__menu-button' data-content="Link Hover" href='#'>Portfolio</a></li>
          <li className='header__menu-item'><a className='header__menu-button' data-content="Link Hover" href='#'>Contacts</a></li>
        </ul>
      </nav>
		</header>
	)
}

export default Header;
