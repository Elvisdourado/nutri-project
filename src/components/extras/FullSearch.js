import React from 'react'
import { Link } from 'react-router-dom'
import projects from '../../data.json'




function FullSearch() {
  console.log('projects')
  return (

    <div>
      <div className='container col-4 list-group'>

        {projects.map((project) => {
          return (
            <Link key={project.id} to={`/Detail/${project.id}`}
              className='list-group-item list-group-item-action'>

              {project.description}

            </Link>
          )

        })}

      </div>

    </div>
  )
}
export default FullSearch