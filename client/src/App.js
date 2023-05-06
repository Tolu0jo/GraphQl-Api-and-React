import './App.css';
import {Routes,Route} from 'react-router-dom'
import HomePage from "./pages/homePage";
import NavBar from './components/navBar';
import Register from './pages/register';
import Login from './pages/login'; 

function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </div>
  );
}

export default App; 
