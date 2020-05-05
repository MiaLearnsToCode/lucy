import React from 'react'
import image from './../assets/additional/five.jpg'
function Home() {
  return (
    <div className="homepage-hero">
      <p className="desktop-role">Interior Designer</p>
      <h1 className="desktop-title">Lucy Morgan-Hobbs</h1>
      <img src={image} alt='homepage'/>
      <h1 className="mobile-title">LMH</h1>
      
    </div>
  )
}

export default Home;