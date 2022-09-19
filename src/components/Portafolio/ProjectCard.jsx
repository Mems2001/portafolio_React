import React, { useState } from 'react'

const ProjectCard = ({project}) => {

    const [projectDet, setProjectDet] = useState(false)

    const [imgNum, setImgNum] = useState(0)

    const prevImg = () => {
        if ( imgNum > 0 ) {
            setImgNum ( imgNum -1 )
        }
    }

    const nextImg = () => {
        if( imgNum < project.images.length - 1) {
        setImgNum ( imgNum + 1 )
        }
    }

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

                <div className='hiddenImgsCont'>
                    <button className='imgBtn cl7' onClick={prevImg}><i className="fa-solid fa-angle-left"></i></button>
                    <img className='hiddenImg' src={project.images[imgNum]} />
                    <button className='imgBtn cl7' onClick={nextImg}><i className="fa-solid fa-angle-right"></i></button>
                </div>
                <div className='articleBody'>
                    <h3 className='projectName'>{project.name}</h3>
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

                    <div className='linksCont'>
                        <h4>Links:</h4>
                        <a className='links' href={project.links.gitHub} target='_blank' ><i className="fa-brands fa-github"></i></a>
                        <a className='links' href={project.links.netlify} target='_blank' ><i className="fa-solid fa-link"></i></a>
                    </div>
                </div>


            <button className='hideBtn' onClick={hideDet} ><i className="fa-solid fa-xmark"></i></button>
            </article>
        </div>
    </div>
  )
  
}

export default ProjectCard