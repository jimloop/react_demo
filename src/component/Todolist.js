import React from 'react'
import '../assets/css/index.css'
class Todolist extends React.Component{
    constructor(props){
        super(props);
        this.state={
           list:[]
        };
    }

    inputChange=(e)=>{
         this.setState({username:e.target.value})
    }

    addDataByEnter=(key)=>{
        if(key.keyCode===13){
            let info=this.refs.info.value;
            if(info=="") return
            let tempList=this.state.list;
            tempList.push(info);
            this.refs.info.value="";
            this.setState({list:tempList})
        }
    }
    addData=()=>{
       let info=this.refs.info.value;
       if(info=="") return
       let tempList=this.state.list;
       tempList.push(info);
       this.refs.info.value="";
       this.setState({list:tempList})
    }
    deleteInfo(key){
        const tempList=this.state.list;
        tempList.splice(key,1);
        this.setState({list:tempList})
    }
    render(){
        return (
            <div>
                <h2>React Todolist演示案例</h2>
                <input type="text" ref="info" onChange={this.inputChange} onKeyUp={this.addDataByEnter}/>
                <button onClick={this.addData}>添加</button>
                <hr/>
                <ul className="list">
                    {
                        this.state.list.map((info,key)=>{
                            return (
                           <li key={key}>{info}<input type="button" defaultValue="删除" onClick={this.deleteInfo.bind(this,key)}/></li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Todolist