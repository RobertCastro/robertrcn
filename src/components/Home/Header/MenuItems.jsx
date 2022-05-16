import React from 'react'
import { useState, useEffect, useRef } from 'react'
import Dropdown from './Dropdown'

const MenuItems = ({ items, depthLevel }) => {
  const [dropdown, setDropdown] = useState(false)
  let ref = useRef()

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false)
      }
    }

    document.addEventListener('mousedown', handler)
    document.addEventListener('touchstart', handler)
    return () => {
      document.removeEventListener('mousedown', handler)
      document.removeEventListener('touchstart', handler)
    }
  
  }, [dropdown])

  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true)
  }
  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false)
  }

  console.log("dep " + depthLevel)


  return (
    <li
      className='menu-items'
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onmouseleave}
    >
      {items.submenu ? (
        <>
          <button
            type='button'
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {
              items.titulo
            }{
              " "
            } {
              depthLevel > 0 ? <span> &raquo; </span> : <span className='arrow' />
            } </button>
            <Dropdown
              depthLevel={depthLevel}
              submens = {items.submenu}
              dropdown = {dropdown}

            />
        </>
      ) : (<a href={`https://www.canalrcn.com${items.url}`} target="_blank" >{
          items.titulo
      }</a>

      )
    } </li>

  )
}

export default MenuItems 