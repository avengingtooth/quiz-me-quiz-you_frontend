import { Routes, Route } from 'react-router-dom'
import './App.css';
import Create from './components/Create';
import Edit from './components/Edit';
import Login from './components/Login'
import SignUp from './components/SignUp'
import Feed from './components/Feed'
import SingleQuizView from './components/SingleQuizView';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={Login}></Route>
        <Route path='/signup' element={SignUp}></Route>
        <Route path='/quiz/all' element={Feed}></Route> 
        <Route path='/quiz/create' element={Create}></Route>  
        <Route path='/quiz/:id' element={SingleQuizView}></Route>  
        <Route path='/quiz/:id/edit' element={Edit}></Route>  
      </Routes>
    </div>
  );
}

export default App;
