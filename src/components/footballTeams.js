import React from 'react';
import { Matches } from './matches';
import axios from 'axios';

//Class extends from react
export class FootballTeams extends React.Component {

    constructor(){
        super();

        this.ReloadData = this.ReloadData.bind(this);
    }
 //added data to the state
    state = {
        matches: []
    };
    componentDidMount() {
        //it will allow to retrieve information about resource
        axios.get('http://localhost:4000/api/matches')
        //this function will get response from the path updating the state
            .then((response) => {
                this.setState({ matches: response.data })
            })
            //if there is an error this function will be used
            .catch((error)=>{
               console.log(error)
            });

    }

    ReloadData(){
        axios.get('http://localhost:4000/api/matches')
            .then((response) => {
                this.setState({ matches: response.data })
            })
            .catch((error)=>{
               console.log(error)
            });

    }
    //render used to run the function
    render() {
        //the return will return and display the command
        return (
            <div>
                <h1> Welcome to my football.</h1>
                <Matches matches={this.state.matches} ReloadData={this.ReloadData}></Matches>
            </div>
        );
    }
}

