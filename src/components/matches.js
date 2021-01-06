import React from 'react';
import { MatchItem } from './matchItem';

export class Matches extends React.Component{


    render(){
        return this.props.matches.map((match)=>{
            //pass reload from FootballTeams
            return <MatchItem match={match} ReloadData={this.props.ReloadData}></MatchItem>

        })
               
      
    }
}

