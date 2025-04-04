import logo from './logo.svg';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import Nav from './components/navbar/Nav';
import About from './components/about/About';

function App() {
  return (
    <div>
      <Nav/>
      <Sidebar />
      <Home />
      <About/>
    </div>
  );
}

export default App;
