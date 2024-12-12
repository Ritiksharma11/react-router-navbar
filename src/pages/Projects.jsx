import React from 'react'
import { Link } from 'react-router-dom'

const Projects = () => {
  return (
    <div>
      <h1>Projects</h1> <br />
      <h2>Dynamic Routing</h2>
      <div className="project project1">
        <Link to={`/projects/1`}>Project with Id 1</Link>
      </div>
      <div className="project project2">
        <Link to={`/projects/2`}>Project with Id 2</Link>
      </div>

    </div>
  )
}

export default Projects