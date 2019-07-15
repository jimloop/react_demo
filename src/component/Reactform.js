import React from 'react'
class Reactform extends React.Component{
    constructor(props){
        super(props);
        this.state={
            msg:'react表单',
            name:'',
            sex:'1',
            citys:['北京','上海','深圳'],
            hobby:[
                {
                    'title':"睡觉",
                    'checked':true
                },
                {
                    'title':"吃饭",
                    'checked':false
                },
                {
                    'title':"跑步",
                    'checked':false
                }
            ],
            info:''
        };
    }

    handleSubmit=(e)=>{
        //阻止submit的默认提交
        e.preventDefault();
        console.log(this.state.info)
    }

    handleName=(e)=>{
        this.setState({name:e.target.checked()})
    }

    handleSex=(e)=>{
        this.setState({sex:e.target.value})
    }

    handleHobby(key){
        let hobby=this.state.hobby;
        hobby[key].checked=!hobby[key].checked;
        this.setState({hobby:hobby})
    }

    handleInfo=(e)=>{
        this.setState({info:e.target.value})
    }
    render(){
        return (
            <div>
                <h2>{this.state.msg}</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>姓名：</label><input type="text" value={this.state.name} onChange={this.handleName}/><br/>
                    <label>性别：</label> 男<input type="radio" value='1' checked={this.state.sex===1} onChange={this.handleSex}/>
                                          女<input type="radio" value='2' checked={this.state.sex===2} onChange={this.handleSex}/>
                                          <br/>
                    <label>城市：</label>
                    <select>
                        {
                            this.state.citys.map((city,index)=>{
                                return <option key={index}>{city}</option>
                        })
                        }
                    </select>
                    <br/>
                    <label>爱好：</label>
                    {
                        this.state.hobby.map((value,key)=>{
                            return (
                                <span key={key}>
                                <input type="checkbox" checked={value.checked} onChange={this.handleHobby.bind(this,key)} /> {value.title}
                                </span>
                            )
                        })
                    }
                    <br/>
                    <label>备注：</label>
                    <textarea value={this.state.info} onChange={this.handleInfo}></textarea>
                    <input type="submit" defaultValue="提交"/>
                </form>
            </div>
        );
    }
}

export default Reactform