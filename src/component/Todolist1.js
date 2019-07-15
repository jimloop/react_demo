import React, {Component} from 'react'
import '../assets/css/index.css'
import Storage from '../model/storage'

class Todolist1 extends Component{
    constructor(props){
        super(props);
        this.state={
            list:[
                {
                    title:'录制inoic',
                    checked:true
                },
                {
                    title:'录制react',
                    checked:false
                },
                {
                    title:'录制Vue',
                    checked:false
                }
            ]

        }
    }

    addData=(key)=>{
        if(key.keyCode!=13)return;
            let title=this.refs.title.value;
            if(title==="")return
            let tempList=this.state.list;
            tempList.push({
                title:title,
                checked:false
            });
            this.refs.title.value="";
            this.setState({list:tempList})
            //执行缓存数据
            Storage.set('todolist',JSON.stringify(tempList))
    }

    checkChange(key){
        let tempList=this.state.list;
        tempList[key].checked=!tempList[key].checked;
        this.setState({list:tempList})
        //执行缓存数据
        Storage.set('todolist',JSON.stringify(tempList))
    }

    //生命周期函数
    componentDidMount() {
        //获取缓存的数据
        let todolist=Storage.get('todolist');
        if(todolist){
            this.setState({list:todolist})
        }
    }

    render() {
        return (
            <div>
                <header><input ref="title" onKeyUp={this.addData}/></header>
                <h2>待办事项</h2>
                <hr/>
                {
                    this.state.list.map((value,key)=>{
                        if(!value.checked){
                            return (
                                <li><input type="checkbox" checked={value.checked} onChange={this.checkChange.bind(this,key)}/>{value.title}</li>
                            )
                        }
                    })
                }
                <h2>已完成事项</h2>
                <hr/>
                {
                    this.state.list.map((value,key)=>{
                        if(value.checked){
                            return (
                                <li><input type="checkbox" checked={value.checked} onChange={this.checkChange.bind(this,key)}/>{value.title}</li>
                            )
                        }
                    })
                }
            </div>
        )
    }
}

export default Todolist1