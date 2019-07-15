import React from 'react';
import './assets/css/App.css';
import MyComponent from "./component/MyComponent";
import Home from "./component/Home";
import News from "./component/News";
import List from "./component/List";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home/>
        <MyComponent />
        <News/>
        <List/>
      </header>
    </div>
  );
}

export default App;
