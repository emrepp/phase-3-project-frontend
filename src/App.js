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


    return (
      <div id="app">
        
      </div>
    )
  }


export default App;