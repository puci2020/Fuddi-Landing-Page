import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import Main from './Main'
import Faq from "./Faq";
import About from './Components/About/About'


class App extends Component {
    render() {
        return (
            <Router>
                <Route path={"/"} exact component={Main}/>
                <Route path={"/about"} component={About} render={()=><Redirect to="/"/>}/>
                <Route path={"/faq"} component={Faq}/>
            </Router>
        );
    }
}

export default App;
