import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route } from 'react-router-dom'




function App {

  const [projects, setProjects] = React.useState([])

  React.useEffect(() => {
    fetchProjects()
  }, [])

  const fetchProjects = () => {
    fetch('/api/projects')
      .then((res) => res.json())
      .then((data) => setProjects(data))
  }

  const patchProjects = (project) => {
    fetch(`/api/projects/${project.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
      },
      body: JSON.stringify({
        favorite: project.favorite,
        title: project.title,
        color: project.color,
      }),
    })
  }
  const postProjects = (project) => {
    fetch('/api/projects/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
      },
      body: JSON.stringify(project),
    })
      .then((res) => res.json())
      .then((data) => {
        setProjects((prevProjects) => {
          return [...prevProjects, data]
        })
      })
  }
  


    return (
      <div id="app">
        
      </div>
    )
  }


export default App;