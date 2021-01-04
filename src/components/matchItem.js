import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export class MatchItem extends React.Component {

    //Constructor
    constructor(){
        super();

        this.DeleteMatch = this.DeleteMatch.bind(this);
    }
//this will allow the delete of the item on the console
DeleteMatch(){
    console.log("Delete: "+this.props.match._id);

    axios.delete("http://localhost:4000/api/matches/"+this.props.match._id)
    .then()
    .catch();
}
    render() {
        return (
            <div>

               

                <Card>
                    <Card.Header>{this.props.match.player}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                        <img src={this.props.match.team} width="200" height="200" ></img>
                            <footer className="blockquote-footer">
                            {this.props.match.venue}
                            </footer>
                        </blockquote>
                    </Card.Body>
                    <Button variant="danger" onClick={this.DeleteMatch}>Delete</Button>
                </Card>
            </div>
        );
    }
}

