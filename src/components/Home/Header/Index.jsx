import React from 'react'
import './styles.css'

const Header = () => {
  return (
    <header className='home-header'>
      <nav className='navbar' role='navigation' aria-label='main navigation'>
        <div className='navbar-brand'>
          <a href='/' className='navbar-item'>
            <img
              src='https://test.canalrcndigital.com/img/logorcn.jpg'
              alt='Logo'
              width='100'
              height='22'
              className='logo'
            />
          </a>

          <a
            role='button'
            className={'navbar-burger burger'}
            aria-label='menu'
            aria-expanded='false'
            data-target='navbarBasicExample'
          >
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
          </a>
        </div>
        <div id='navbarBasicExample' className='navbar-menu'>
          <div className='navbar-end'>
            <div className='navbar-item'>
              <a href='/' className='navbar-item'>
                Inicio
              </a>
             
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header