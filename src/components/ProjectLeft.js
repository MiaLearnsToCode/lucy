import React from 'react';
import images from '../data/Images'

function ProjectLeft({ title, hashtag, description, frontImage, backImage, index}) {
  return (
    <div className="project-container" style={{ 'flexDirection': index % 2 ? 'row-reverse': 'row'}}>
      <section className="project-desc">
        <p className="hashtag">{hashtag}</p>
        <h2>{title}</h2>
        <p>{description}</p>
      </section>
      <section className="front-image" style={{ 'marginLeft': index % 2 ? '-100px' : '0px' }}>
        <img src={images[frontImage]} alt={title}/>
      </section>
      <section className="back-image" style={{ 'marginLeft': index % 2 ? '100px' : '-100px' }}>
        <img src={images[backImage]} alt={title} />
      </section>
    </div>
  )
}

export default ProjectLeft;