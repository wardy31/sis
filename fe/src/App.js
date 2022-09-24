import './App.css';

import {Routes,Route} from "react-router-dom"
import Login from './components/Login'
import ManageStudent from './components/ManageStudent'
import Offers from './components/Offers'

function App() {
  return  <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='manage' element={<ManageStudent/>}/>
      <Route path='offers' element={<Offers/>}/>
  </Routes>

}

export default App;
