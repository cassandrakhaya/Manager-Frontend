import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Navbar from "./components/Navbar"

function App() {
  return (
    <Router>
      <Routes>
        <Route path= "/" element ={<Navbar/>}>
        <Route index element={<Home/>} />
        <Route path= "Menu" element={<Menu/>} />
        </Route>
      </Routes>
    </Router>
    
  );
}

export default App;