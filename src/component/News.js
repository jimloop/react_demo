import React from 'react';

class News extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userinfo:'张三'
        }
    }

    render() {
        return (
            <div>
                <p>{this.state.userinfo}</p>
                <ul>
                    <li>这是一个列表</li>
                    <li>这是一个列表</li>
                    <li>这是一个列表</li>
                </ul>
            </div>
        );
    }
}

export default News