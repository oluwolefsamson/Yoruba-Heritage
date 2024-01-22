import React from 'react'
import './Hero.css'
import Button from '@mui/material/Button';

const Hero = () => {
  return (
    <div className='hero-container'>

        {/* left side */}
        <div className='first-side'>
            <h2>YORUBA <span>HERITAGE </span>UNION</h2>
            <p>Agbajo owo laf’in soya. Awa Lagba, Adie Funfun lagba adie</p>
            <Button variant="outlined" color="error" size='small'>
              About Us
            </Button>
        </div>

        {/* right side */}

        <div className='second-side'>
            <img src='./hero-img.jpg' alt='hero-img' />
           {/* <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#FA4D56" d="M54.4,-72.6C70.3,-63.4,82.6,-47.1,86.5,-29.4C90.5,-11.8,85.9,7.4,77.8,23.1C69.7,38.9,58,51.3,44.4,56.5C30.9,61.7,15.4,59.7,-1.4,61.6C-18.1,63.4,-36.3,69.1,-51,64.3C-65.7,59.5,-76.9,44.1,-81.7,27.1C-86.4,10.1,-84.7,-8.4,-75.9,-21.4C-67.2,-34.4,-51.5,-41.8,-37.7,-51.7C-23.9,-61.6,-11.9,-73.8,3.7,-78.9C19.3,-84,38.6,-81.8,54.4,-72.6Z" transform="translate(100 100)" />
            </svg> */}
        </div>
    </div>
  )
}

export default Hero