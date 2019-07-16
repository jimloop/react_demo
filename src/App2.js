import React,{Component} from "react"
import { Button } from 'antd';
import './assets/css/index.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Home from "./component/Home";
import Caipinlist from "./component/Caipinlist";
import Caipindetail from "./component/Caipindetail";

class App2 extends Component{
    render() {
        return (
            <Router>
            <div className="App">
                <Button type="primary">Click</Button>
            </div>
                <hr/>
                <Route exact path="/" component={Home}/>
                <Route path="/cplist" component={Caipinlist}/>
                <Route path="/cpdetail" component={Caipindetail}/>
            </Router>
        )
    }
}

export default App2