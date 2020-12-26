import React from 'react'
import './App.css';
import Header from './pages/Header'
import AddToDo from './pages/AddToDo'
import Todos from './pages/Todos'
function App() {
  return (
    <div className="app">
      <Header/>
      <AddToDo/>
      <Todos/>
    </div>
  );
}

export default App;
