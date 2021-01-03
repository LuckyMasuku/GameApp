import React from 'react';

export class Create extends React.Component {


    constructor() {
        super();

        this.onSubmit = this.onSubmit.bind(this);
        this.onChangePlayer = this.onChangePlayer.bind(this);
        this.onChangeVenue = this.onChangeVenue.bind(this);
        this.onChangeTeam = this.onChangeTeam.bind(this);

        this.state = {
            Player: '',
            Venue: '',
            Team: ''
        }
    }

    onChangePlayer(e) {
        this.setState({
            Player: e.target.value
        });
    }

    onChangeVenue(e) {
        this.setState({
            Venue: e.target.value
        });
    }

    onChangeTeam(e){
        this.setState({
            Team: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        alert("Match: " + this.state.Player + " " + this.state.Venue + " " + this.state.Team);
    }

    render() {
        return (
            <div className='App'>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Match Player:</label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Player}
                            onChange={this.onChangePlayer}></input>
                    </div>
                    <div className="form-group">
                        <label>Add Match Venue:</label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Venue}
                            onChange={this.onChangeVenue}></input>
                    </div>
                    <div className="form-group">
                        <label>Match Team:</label>
                        <textarea type='text'
                            className='form-control'
                            value={this.state.Team}
                            onChange={this.onChangeTeam}>
                        </textarea>
                    </div>


                    <div className="form-group">
                        <input type='submit'
                            value='Add Match'
                            className='btn btn-primary'></input>

                    </div>
                </form>
            </div>
        );
    }
}

