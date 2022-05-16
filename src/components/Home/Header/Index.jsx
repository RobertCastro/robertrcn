import React from 'react'
import './styles.css'
import { useEffect, useState } from 'react';
// Import menu from file
// import { menuItems } from '../../../menu'
import MenuItems from './MenuItems';

const Header = () => {

  const api = 'https://test.canalrcndigital.com/menu.json';
  const [items, setItems] = useState([]);
  const getMenus = async () => {
    const response = await fetch(api);
    const responseJSON = await response.json();
    setItems(responseJSON);
  }

  useEffect(() => {
    getMenus();
  }, []);

  return (
    <>
      {items != undefined ? (
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
          </div>
          <ul className='menus'>
            {
                items.map((menu, index) => {
                const depthLevel = 0
                  return <MenuItems items={menu} key={index} depthLevel={depthLevel} />
              })
            }
          </ul>
        </nav>
      </header>
      ) : (' ')}

    </>
    
  )
}

export default Header