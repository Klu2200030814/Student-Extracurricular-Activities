import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Signin from './components/Signin';
import User from './components/User';
import Admin from './components/Admin';
import Student from './components/Student';
function App() {
  return (
    <React.Fragment>
      <header>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home/>} exact />
          <Route path="/signin" element={<Signin/>} exact />
          <Route path="/user" element={<User/>}exact/>
          <Route path="/admin" element={<Admin/>}exact/>
          <Route path="/student" element={<Student/>}exact/>
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
