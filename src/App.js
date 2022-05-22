import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar';
import Home from './components/Home/home';
import About from './components/about/about';
import Skills from './components/skills/skills';
function App() {
  return (
    <div className="App">
    <Navbar></Navbar>
    <Home></Home>
    <About></About>
    <Skills></Skills>
    </div>
  );
}

export default App;
