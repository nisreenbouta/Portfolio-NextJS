import React from 'react'
import ProjectCard from './reusable/ProjectCard'
const Projects = () => {
  const projects = [
    {title: "OurNotes", description :"Basic MVC website Students Notes Sharing platform using PHP Laravel 9.", link: "https://github.com/nisreenbouta/Laravel9-OurNotes"},
    {title: " React JS Web Portfolio ", description :"Web-based portfolio using React JS.", link: ""},
    {title: " React Native University Automation App", description :"An application designed to streamline academic processes and ...", link: "https://github.com/E-campus-karabuk"}
  ]
  return (
    <div id='projects'>
      <h2 className='font-light font-vt323 text-4xl max-md:text-3xl max-md:text-center tracking-wide '>My Projects</h2>
        <div className='flex flex-row max-md:flex-col'>
          {projects.map((project) => (<ProjectCard description={project.description} title={project.title} link={project.link} key={project.title} />))}
        </div>
    </div>
  )
}

export default Projects