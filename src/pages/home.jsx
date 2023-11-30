import React from 'react'
import '../styles/home.css'
import Hero from '../components/hero'
import Movies from '../components/movies'

function Home() {
  return (
    <div className='home' >
      <Hero className='hero' />
      <Movies className='movies' />
    </div>
  )
}

export default Home
