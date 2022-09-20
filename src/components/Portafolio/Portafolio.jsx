import React from 'react'
import projects from '../../json/projects.json'
import ProjectCard from './ProjectCard'

const Portafolio = ({language}) => {

  console.log(projects)

  return (
    <section id='portafolio'>
      
      <div className='titles'>
       <h2>{language[4].title}</h2> 
      </div>

      {/* <div className='projectsCont'>
        {projects.map(
          project => <ProjectCard key={project.id} project={project} />
        )}
      </div> */}
      
    </section>
  )
}

export default Portafolio