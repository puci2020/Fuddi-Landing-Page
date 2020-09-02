import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Main from './Main'
import Faq from "./Faq";


class App extends Component {
    render() {
        return (
            <Router basename={process.env.PUBLIC_URL}>
                <Route path={"/"} exact component={Main}/>
                <Route path={"/faq"} component={Faq}/>
            </Router>
        );
    }
}

export default App;
