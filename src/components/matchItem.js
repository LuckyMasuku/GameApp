import React from 'react';
import Card from 'react-bootstrap/Card'
export class MatchItem extends React.Component {


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
                </Card>
            </div>
        );
    }
}

