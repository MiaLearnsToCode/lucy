import React from 'react'
import {projects } from './../data/projects.json'
import ProjectLeft from './../components/ProjectLeft'

function Project() {
  return (
    <div>
      {projects.map((project, index) => {
        return <ProjectLeft key={index} index={index} {...project}/>
      })}

    </div>
  )
}

export default Project;