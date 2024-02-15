import { Routes, Route } from 'react-router-dom'

import './App.css';
import './stylesheets/ProjectIcon.css'
import './stylesheets/Home.css'
import './stylesheets/Project.css'
import Home from "./pages/Home";
import ErrorPage from './pages/ErrorPage';
import Project from './pages/Project';

function App() {
  return (

      <div className="App">
        <Routes>
          <Route>
            <Route path='/' element={<Home />}></Route> 
            <Route path='/project/*' element = {<Project />}></Route> 
            <Route path='*' element={<ErrorPage actionText='Home' redirection='/' error='This page does not exist'></ErrorPage>}></Route>
          </Route>
        </Routes>
      </div>
  );
}

export default App;