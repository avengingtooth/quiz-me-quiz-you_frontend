import { Routes, Route } from 'react-router-dom'
import 'animate.css';

import './App.css';
import './stylesheets/auth.css'
import './stylesheets/quiz.css'
import './stylesheets/feed.css'
import './stylesheets/nav.css'
import './stylesheets/edit-create.css'
import './stylesheets/answer.css'
import './stylesheets/game.css'
import './stylesheets/home.css'
import './stylesheets/login.css'
import './stylesheets/joinGame.css'
import './stylesheets/createLobby.css'

import Create from './pages/Create';
import Edit from './pages/Edit';
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Feed from './pages/Feed'
import SingleQuizView from './pages/SingleQuizView';
import Home from './pages/Home'
import Navbar from './components/Navbar';
import CreateLobby from './pages/CreateLobby';
import SelectQuiz from './pages/SelectQuiz'
import JoinGame from './pages/JoinGame';
import Game from './pages/Game';
import SinglePlayerResults from './pages/SinglePlayerResults'
import ErrorPage from './components/ErrorPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Navbar />}>
          <Route path='/' element={<Home />}></Route> 

          {/* authentication routes */}
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<SignUp />}></Route>

          {/* crud routes */}
          <Route path='/quiz/create' element={<Create />}></Route>  
          <Route path='/quiz/:id/edit' element={<Edit />}></Route>

          <Route path='/quiz/all' element={<Feed />}></Route> 
          <Route path='/quiz/:id' element={<SingleQuizView />}></Route>  
        
          <Route path='/quiz/single-player-results/:score/:max' element={<SinglePlayerResults />}></Route>

          {/* multiplayer routes */}
          <Route path='/multiplayer/select' element={<SelectQuiz />}></Route>
          <Route path='/multiplayer/createLobby/:id' element={<CreateLobby />}></Route>
          <Route path='/multiplayer/join' element={<JoinGame />}></Route>
          <Route path='/multiplayer/play/:gameId/:username' element={<Game />}></Route>
          <Route path='*' element={<ErrorPage actionText='Home' redirection='/' error='This page does not exist'></ErrorPage>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
