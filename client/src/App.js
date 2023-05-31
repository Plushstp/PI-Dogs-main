import { Routes, Route, useLocation } from 'react-router-dom';
import LandingPage from "./components/LandingPage/LandingPage.jsx";
import Home from "./components/Home/Home.jsx";
import Details from "./components/Details/Details.jsx";
import Form from "./components/Form/Form.jsx";
import Navbar from './components/Navbar/Navbar.jsx';
import './App.css';



export default function App() {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname !== "/" && <Navbar />}
      <Routes>
          <Route exact path="/" element={<LandingPage/>}></Route>
          <Route exact path="/home" element={<Home/>}></Route>
          <Route exact path="/details" element={<Details/>}></Route>
          <Route exact path="/create" element={<Form/>}></Route>
         
      </Routes>
   </div>
  );
}
