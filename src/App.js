import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { Container, Nav } from 'bootstrap';

class App extends Component {
  render() {
    return (
      <Container>
        <Nav className="navbar navbar-expand-lg fixed-top is-white is-dark-text">
          <div className="navbar-brand h1 mb-0 text-large font-medium">
            Online Retail Dashboard
          </div>
          <div className="navbar-nav ml-auto">
            <div className="user-detail-section">
              <span className="pr-2">Hi, Ayush</span>
              <span className="img-container">
                <img src="" className="rounded-circle" alt="user" />
              </span>
            </div>
          </div>
        </Nav>
      </Container>
    );
  }
}

export default App;
