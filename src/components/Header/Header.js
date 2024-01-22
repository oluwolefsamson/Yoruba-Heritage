import React from 'react'
import './Header.css'
import Button from '@mui/material/Button';

const Header = () => {
  return (
    <div className='h-container'>
      <div className='logo'>
        <img src='./logo.png' alt='logo'/>
      </div>

  
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Patrons</li>
          <li>Officials</li>
          <li>Heroes & Legends</li>
          <li>Festivals</li>
        </ul>

      <div className='button'>
        <Button size='small' variant="outlined" color="error">
        Contact Us
      </Button>
      </div>
    </div>
  )
}

export default Header