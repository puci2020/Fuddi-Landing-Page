import React, {useEffect} from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Main from './Pages/Main'
import Faq from "./Pages/Faq";
import Contact from "./Pages/Contact";
import Newsletter from "./Pages/Newsletter";
import Crowdfunding from "./Pages/Crowdfunding";
import Shop from "./Pages/Shop/Shop";


const App = () => {
        return (
            <Router basename={process.env.PUBLIC_URL}>
                <Route path={"/"} exact component={Main}/>
                <Route path={"/faq"} component={Faq}/>
                <Route path={"/contact"} component={Contact}/>
                <Route path={"/newsletter"} component={Newsletter}/>
                <Route path={"/crowdfunding"} component={Crowdfunding}/>
                <Route path={"/shop"} component={Shop}/>
            </Router>
        );
}

export default App;
