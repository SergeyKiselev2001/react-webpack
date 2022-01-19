import React, { Component } from "react";
import Comp from './Comp.jsx';

import '../styles/App.css';

class App extends Component {
    render() {
        return (
            <div>
                <Comp msg="test"/>
            </div>
        );
    }
}

export default App;