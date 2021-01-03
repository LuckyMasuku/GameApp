import React from 'react';
import Card from 'react-bootstrap/Card'
export class MatchItem extends React.Component {


    render() {
        return (
            <div>

               

                <Card>
                    <Card.Header>{this.props.match.Title}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                        <img src={this.props.match.Poster} width="200" height="200" ></img>
                            <footer className="blockquote-footer">
                            {this.props.match.Year}
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

