import React, {Component} from 'react';
import './App.css';
import Appheader from "./components/Appheader";
import ImageView from './components/ImageView';
class App extends Component {
  
  render(){
    return (
      <div className="container">
        <Appheader/>
        <ImageView/>
      </div>
    );
  }
}

export default App;
