import React from "react";
import {
  BrowserRouter, 
  Routes,
  Route,
} from "react-router-dom";

import './App.css';
import { About } from "./About";
import { Home } from "./Home";
import { Profile } from "./Profile";
import { Login } from './auth/login'
import { Register } from './auth/register'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/profile" element={<Profile/>}>
          <Route path="login" element={ <Login/> } />
          <Route path="register" element={ <Register/> } />
        </Route>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
