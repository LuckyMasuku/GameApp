import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { Content } from './components/content';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AddTeams } from './components/addTeams';
import { FootballTeams } from './components/footballTeams';
import { Edit } from './components/edit';

class App extends Component {
  render() {

    return (
      <Router>
        <div className="App">

          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/footballTeams">FootballTeams</Nav.Link>
              <Nav.Link href="/addTeams">AddTeams</Nav.Link>
            </Nav>

          </Navbar>
          <br />
          <Switch>
            <Route path='/' component={Content} exact />
            <Route path='/addTeams' component={AddTeams} exact />
            <Route path='/footballTeams' component={FootballTeams} exact />
            <Route path='/edit/:id' component={Edit}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
