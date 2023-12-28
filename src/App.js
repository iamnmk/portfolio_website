import './App.css';
import { NavBar } from './components/NavBar';
import{Banner} from './components/Banner';
import {Skills} from './components/Skills'
import { Services } from './components/Services';
import'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar>

      </NavBar>
      <Banner />
      <Skills />
      <Services />
      
    </div>
  );
}

export default App;
