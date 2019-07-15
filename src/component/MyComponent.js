import React,{ Component } from 'react'

class MyComponent extends Component{
    constructor(props){
        super(props);
        this.state = {count: 1,users:[]}
    }

    componentWillMount() {
        fetch('/mokes/users').then(res =>{
            return res.json();
        }).then(data=>{
            this.setState({users:data})
        })
    }

    add(){
        this.setState(preState=>({count: preState.count + 1}))
    }

    render() {
        return (<ul>
            <li>hello</li>
            {this.state.users.map((user,index)=>{
                return (<li key={index}>
                    姓名：{user.name}
                    &nbsp;&nbsp;
                    年龄：{user.age}
                </li>)
            })}
        </ul>);
    }
}

export default MyComponent
