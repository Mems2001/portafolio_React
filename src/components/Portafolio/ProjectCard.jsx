import React, { useState } from 'react'

const ProjectCard = ({project}) => {

    const [projectDet, setProjectDet] = useState(false)

    const showDet = () => {
        setProjectDet(true)
    }

    const hideDet = () => {
        setProjectDet(false)
    }

  return (
    <div className='mainContDet'>
        <div className={`imgCont ${projectDet ? 'showfalse' : 'showtrue'}`} onClick={showDet}>
            <img className='projectImg' src={`${project.images[0]}`} />
        </div>

        <div className={`show${projectDet} hiddenCont`}>
            <div className='backGround'></div>
            <article className='articleDetails'>

                <div>
                    <img className='hiddenImg' src={project.images[0]} />
                </div>
                <div className='articleBody'>
                    <h3>{project.name}</h3>
                    <span className='langContainer'>
                        <h4>Languages:</h4>
                        {
                        project.languages.map(
                            lang => <span>{lang}</span>
                        )
                        }
                    </span>
                    <span className='compatibilityCont'>
                        <h4>Compatibility:</h4>
                        {project.compatibility.map(
                        c => <span>{c}</span>
                    )}</span>
                </div>

            <button onClick={hideDet} >X</button>
            </article>
        </div>
    </div>
  )
  
}

export default ProjectCard