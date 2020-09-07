import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Main from './Pages/Main'
import Faq from "./Pages/Faq";
import Contact from "./Pages/Contact";


class App extends Component {
    render() {
        return (
            <Router basename={process.env.PUBLIC_URL}>
                <Route path={"/"} exact component={Main}/>
                <Route path={"/faq"} component={Faq}/>
                <Route path={"/contact"} component={Contact}/>
            </Router>
        );
    }
}

export default App;
