import React from 'react';
import { Matches } from './matches';
import axios from 'axios';

export class Read extends React.Component {

    state = {
        matches: []
    };
    componentDidMount() {
        axios.get('https://jsonblob.com/api/jsonblob/520c3b5e-0312-11eb-a6af-cbf00d776032')
            .then((response) => {
                this.setState({ matches: response.data.Search })
            })
            .catch((error)=>{
               console.log(error)
            });

    }
    render() {
        return (
            <div>
                <h1> The is my Component.</h1>
                <Matches matches={this.state.matches}></Matches>
            </div>
        );
    }
}

