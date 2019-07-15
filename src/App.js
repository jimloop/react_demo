import React from 'react';
import './assets/css/App.css';
import MyComponent from "./component/MyComponent";
import Home from "./component/Home";
import News from "./component/News";
import List from "./component/List";
import Todolist1 from "./component/Todolist1";
import Reactform from "./component/Reactform";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home/>
        <MyComponent />
        <br/><hr/>
        <News/>
          <br/><hr/>
        <List/>
          <br/><hr style={{color:'white'}}/>
        <Todolist1/>
        <br/><hr/>
        <Reactform/>
      </header>
    </div>
  );
}

export default App;
