import React,{Component} from "react";
import '../assets/css/index.css'
class Home extends Component{

    constructor(){
        super();
        this.state={
            name:"张三",
            title:'我是一个div'
        }
    }
    render(){
        return (
            <div>
               <h2>react组件中所有节点都要被根节点包含</h2>
               <p>p标签：{this.state.name}</p>
                <div className='red'>红色的div</div>
                <br/>
                <div title={this.state.title}>我是一个div</div>
            </div>
    )
    }
}

export default Home;