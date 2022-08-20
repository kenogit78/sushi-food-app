import React from 'react'
import { Link } from 'react-router-dom'
import home from '../assets/home.png'
import Button from '../components/Button'

const Homepage = () => {
  return (
    <div className='home'>

        <div className='home-image'>
            <img src={home} alt="home image" />
        </div>

        <div className='home-text'>
            <h1>Welcome to Sushi Restaurant</h1>
            <p>People eat with their eyes and Sushi creates an easy way for customers to order when they can see beautiful photos of your food</p>

            <div className='home-text-action'>
               <Link to='/menu'> <Button text={'MENU'} /> </Link> 
               <Link to='/cart'> <Button text={'CART'} /> </Link> 
            </div>

        </div>

    </div>
  )
}

export default Homepage