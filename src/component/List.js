import React from "react"
class List extends React.Component{
constructor(props){
    super(props);
    this.state={
        username:''
    };
}

inputChange=()=>{
  let value=this.refs.username.value;
  this.setState({
      username:value
  })
    console.log(value);
}

getInput=()=>{
  alert(this.state.username)
}

render() {
    return(
        <div>
            我是List组件
            <input ref="username" onChange={this.inputChange}/>
            <button onClick={this.getInput}>获取input的值</button>
        </div>
    );
}

}
export default List