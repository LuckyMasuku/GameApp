import React from 'react';
import { Matches } from './matches';
import axios from 'axios';

export class Read extends React.Component {

    state = {
        matches: []
    };
    componentDidMount() {
        axios.get('http://localhost:4000/api/matches')
            .then((response) => {
                this.setState({ matches: response.data })
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

