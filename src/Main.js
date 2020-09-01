

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import App from './App'
import Faq from "./Faq";
// import About from './Components/About/About'


class Main extends Component {
    render() {
        return (
            <Router>
                <Route path={"/"} exact component={App}/>
                {/*<Route path={"/about"} component={About} render={()=><Redirect to="/"/>}/>*/}
                <Route path={"/faq"} component={Faq}/>
            </Router>
        );
    }
}

export default Main;
