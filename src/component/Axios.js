import React from 'react'
import axios from 'axios'

class Axios extends React.Component{
    constructor(props){
        super(props);
        this.state={};
    }

    getData=()=>{
        let api='http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20';

        axios.get(api)
            .then((res)=>{
                console.log(res);
            }).catch((err)=>{
                console.log(err);
        })
    }
    render() {
        return (
            <div>
                <h2>获取服务器接口api</h2>
                <button onClick={this.getData}>获取api</button>
            </div>
        )
    }
}

export default Axios