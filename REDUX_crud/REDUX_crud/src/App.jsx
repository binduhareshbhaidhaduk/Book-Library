import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home';
import Editproduct from './components/Editproduct/Editproduct'


import { Routes, Route } from 'react-router-dom';
import Createproduct from './components/Createproduct/Createproduct';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route path="/create" element={<Createproduct />} />
        <Route path="/edit/:id" element={<Editproduct />} />
      </Routes>
    </>
  )
}

export default App
