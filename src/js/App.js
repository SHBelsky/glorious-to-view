// React
import React, { Component }   from 'react';

// CSS
import '../css/App.css';

// JS
import glorious  from "../img/glorious.jpg";
import snow      from "../img/snow.jpg";
import sunset    from "../img/sunset.jpg";
import treeline  from "../img/treeline.jpg";

// Other
let   counter = 0;
const images  = [glorious, snow, sunset, treeline];

class App extends Component {
    componentDidMount() {
        this.bgTimeout();
    }

    constructor(props, context) {
        super(props, context);
        this.state = {
            bg: {
                backgroundImage: `url(${glorious})`,
                backgroundSize:  "cover"
            }
        };
        this.bgTimeout = () => {
            setTimeout(() => {
                this.setState({
                    bg: {
                        backgroundSize:  "0 0"
                    }
                });
                this.setState({
                    bg: {
                        backgroundImage: `url(${images[counter]}`,
                        backgroundSize:  "cover"
                    }
                });

                counter = counter === 3 ? 0 : counter + 1;
                this.bgTimeout();
            }, 5000);
        };
    }

    render() {
        return (
            <div className="App">
                <div className="background" id="background" style={this.state.bg}>
                </div>
                <div className="flex">
                    <div className="trailer">
                        <p>Glorious To View</p>
                        <p>A Cornell University photo blog</p>
                        <p>Fall 2017</p>
                        <p>
                            <a href="https://github.com/SHBelsky/glorious-to-view">GitHub</a> &bull; <a href="mailto:shb95@cornell.edu">Contact</a>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
