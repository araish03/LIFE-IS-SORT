import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import './App.css';
import SideNav from './components/SideNav/SideNav';
import TopNav from './components/TopNav/TopNav';

function App() {
  return (
   
    <div className="App">
     
     <SideNav/>
     <TopNav/>
    </div>
  );
}

export default App;
