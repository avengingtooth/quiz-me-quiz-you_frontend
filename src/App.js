import { Routes, Route } from 'react-router-dom'

import './App.css';
import './stylesheets/auth.css'
import './stylesheets/quiz.css'
import './stylesheets/feed.css'
import './stylesheets/nav.css'
import './stylesheets/edit-create.css'
import './stylesheets/answer.css'

import Create from './pages/Create';
import Edit from './pages/Edit';
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Feed from './pages/Feed'
import SingleQuizView from './pages/SingleQuizView';
import Home from './pages/Home'
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Navbar />}>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<SignUp />}></Route>
          <Route path='/quiz/all' element={<Feed />}></Route> 
          <Route path='/quiz/create' element={<Create />}></Route>  
          <Route path='/quiz/:id' element={<SingleQuizView />}></Route>  
          <Route path='/quiz/:id/edit' element={<Edit />}></Route>  
        </Route>
      </Routes>
    </div>
  );
}

export default App;
