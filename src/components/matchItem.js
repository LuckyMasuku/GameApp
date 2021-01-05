import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import{Link} from 'react-router-dom';

export class MatchItem extends React.Component {

    //Constructor
    constructor(){
        super();

        this.DeleteMatch = this.DeleteMatch.bind(this);
    }
//this will allow the delete of the item on the console
DeleteMatch(a){
    a.preventDefault();
    console.log("Delete: "+this.props.match._id);

    axios.delete("http://localhost:4000/api/matches/"+this.props.match._id)
    .then(()=>{
        //this will call reloaddata from matches 
        this.props.ReloadData();
    })
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
                    <Link to ={"/edit/"+ this.props.match._id} className="btn btn-primary">Edit</Link>
                </Card>
            </div>
        );
    }
}

