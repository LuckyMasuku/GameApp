import React from 'react';
import { Matches } from './matches';

export class Read extends React.Component{

    state = {
        matches:[
            {
            "Title": "Hakkim",
            "Year": "2018",
            "imdbID": "tt4154756",
            "Type": "movie",
            "Poster": "https://cdn.footballtransfertavern.com/wp-content/uploads/2020/09/Thiago-Alcantara-in-action-for-Liverpool.jpg"
            },
            {

            "Title": "Ben",
            "Year": "2016",
            "imdbID": "tt3498820",
            "Type": "movie",
            "Poster": "https://i2-prod.dailystar.co.uk/incoming/article19445534.ece/ALTERNATES/s1227b/0_httpscdnimagesdailystarcoukdynamic122photos804000900x738862804"
            },
            {

                "Title": "Reece",
                "Year": "2016",
                "imdbID": "tt3498820",
                "Type": "movie",
                "Poster": "https://i2-prod.football.london/incoming/article19228145.ece/ALTERNATES/s1200b/1_GettyImages-1229473615.jpg"
                },
            {
            "Title": "Thiago",
            "Year": "2007",
            "imdbID": "tt0472062",
            "Type": "movie",
            "Poster": "https://upload.wikimedia.org/wikipedia/commons/d/dd/Hakim_Ziyech_2020.jpg"
            }
            ]
    };

    render(){
        return(
               <div>
                   <h1> The is my Component.</h1>
                   <Matches matches={this.state.matches}></Matches>
               </div>
        );
    }
}

