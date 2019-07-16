import React,{Component} from 'react'
import fetchJsonp from 'fetch-jsonp'

class Fetchjsonp extends Component{
    constructor(props){
        super(props);
        this.state={
            list:[]
        };
    }

    getData=()=>{
        //获取数据
        let api='http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20';
        fetchJsonp(api)
            .then((res)=>{
                return res.json()
            }).then((json)=>{
               this.setState({list:json.result})
        }).catch((e)=>{
            console.log('parsing failed',e)
        })
    }

    render() {
        return (
            <div>
                <h2>Fetch jsonp 获取服务端接口的数据</h2>

                <button onClick={this.getData}>fetchjsonp获取数据</button>
                <ul>
                    {
                      this.state.list.map((value,key)=>{
                          return (<li key={key}>{value.title}</li>)
                      })
                    }
                </ul>
            </div>
        )
    }
}

export default Fetchjsonp