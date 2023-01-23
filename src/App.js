import React from 'react';
import ReactDOM from 'react-dom';
import Login from './components/Login'
import Projects from './components/Projects'
import ProjectDashboard from './components/ProjectDashboard'

import Layout from './containers/Layout'

import { BrowserRouter as Router, Route } from 'react-router-dom'




function App() {

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
  const handleDeleteProject = (deleteProject) => {
    const updatedProjects = projects.filter(
      (project) => project.id !== deleteProject.id
    )

    fetch(`/api/projects/${deleteProject.id}`, {
      method: 'DELETE',
    })

    setProjects(updatedProjects)
  }

  const handleUpdatingProject = (changedProject) => {
    patchProjects(changedProject)

    const updatedProjects = projects.map((project) =>
      project.id === changedProject.id ? changedProject : project
    )
    setProjects(updatedProjects)
  }
  const [search, setSearch] = React.useState('')
  const filterProjects = projects.filter((project) => {
    return project.title.toLowerCase().includes(search.toLowerCase())
  })
}

   
      return (
        
            <Router>
              <Layout
                toggleTheme={toggleTheme}
                mode={mode}
                projects={projects}
                search={search}
                setSearch={setSearch}
                fetchProjects={fetchProjects}>
                <Route
                  exact
                  path='/'
                  render={(routerProps) => <Login {...routerProps} />}
                />
                <Route
                  exact
                  path='/projects'
                  render={(routerProps) => (
                    <Projects
                      {...routerProps}
                      projects={filterProjects}
                      mode={mode}
                      patchProjects={patchProjects}
                      postProjects={postProjects}
                      handleUpdatingProject={handleUpdatingProject}
                      handleDeleteProject={handleDeleteProject}
                    />
                  )}
                />
                <Route
                  exact
                  path='/projects/:id'
                  render={(routerProps) => (
                    <ProjectDashboard
                      {...routerProps}
                      mode={mode}
                      handleUpdatingProject={handleUpdatingProject}
                      handleDeleteProject={handleDeleteProject}
                    />
                  )}
                />
              </Layout>
            </Router>
          
      )
      
    export default App
    
  