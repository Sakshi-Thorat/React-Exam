import React from 'react';
import axios from 'axios';


class NewList extends  React.Component {
    state={
        lists: []
    }
    componentDidMount(){
        axios.get(`https://jsonplaceholder.typicode.com/comments`)
        .then(res=>{
            const lists= res.data;
            this.setState({lists});
        }
        )
    }
    render() {
        return 
        (
            <ul>
                {
                    this.state.lists
                    .map(list=><li key={list.id}>{list.name}</li>)
                }
            </ul>
        )
    }
}
export default NewList;