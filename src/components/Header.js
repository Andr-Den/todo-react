import React from 'react'

function Header({onClick}) {
  return (
    <header>
      <h1>Список дел</h1>
      <button onClick={onClick}>+</button>
    </header>
  )
}

export default Header;
