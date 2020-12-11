import React, { Component } from 'react';
import './App.css';
import { FormGroup, FormControl, InputGroup, Button } from 'react-bootstrap';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ''
        }
    }



    search() {
        console.log('this.state', this.state);
        const BASE_URL = 'https://api.spotify.com/v1/search?';
        const FETCH_URL = BASE_URL + 'q=' + this.state.query + '&type=artist&limit=1';
        console.log('FETCH_URL', FETCH_URL);
    }

    render() {
        return (
            <div className="App">
                <div className="App-title">
                    <h1> Music master </h1>
                </div>
                <FormGroup className="SearchGroup">
                    <InputGroup>

                        <FormControl
                            type="text"
                            placeholder="Search for an Artist"
                            query={this.state.query}
                            onChange={event => { this.setState({ query: event.target.value }) }}
                            onKeyPress={event => {
                                if (event.key === 'Enter') {
                                    this.search()
                                }
                            }}
                        />
                    </InputGroup>

                    <Button
                        onClick={() => this.search()}

                    >
                        Submit</Button>

                </FormGroup>
                <div className="Profile">
                    <div>Artist Picture</div>
                    <div>Artist Name</div>
                </div>
                <div className="Gallery">
                    Gallery
                </div>
            </div>
        )
    }
}

export default App;