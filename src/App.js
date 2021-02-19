import React from 'react';
import {HashRouter as Routera, Router, Route} from 'react-router-dom';
import Main from './Pages/Main'
import Faq from "./Pages/Faq";
import Contact from "./Pages/Contact";
import Newsletter from "./Pages/Newsletter";
import Crowdfunding from "./Pages/Crowdfunding";
import Shop from "./Pages/Shop/Shop";
import Blog from "./Pages/Blog/Blog";
import PostPage from "./Components/Blog/PostPage";
import NewPost from "./Pages/Blog/NewPost";
import AdminLogin from "./Pages/Blog/AdminLogin";
import ReactGA from 'react-ga';
import createHistory from 'history/createBrowserHistory';

const history = createHistory();
ReactGA.initialize('G-WSW3BKQX9B');
history.listen((location, action) => {
    ReactGA.pageview(window.location.href + location.search);
    // console.log(window.location.href + location.search);
})


const App = () => {
    return (
        <Router history={history}>
            <Routera basename={process.env.PUBLIC_URL}>
                <Route exact path={"/"} component={Main}/>
                <Route path={"/faq"} component={Faq}/>
                <Route path={"/contact"} component={Contact}/>
                <Route path={"/newsletter"} component={Newsletter}/>
                <Route path={"/crowdfunding"} component={Crowdfunding}/>
                <Route exact path={"/blog"} component={Blog}/>
                <Route  path={"/newPost"} component={NewPost}/>
                <Route  path={"/admin"} component={AdminLogin}/>
                <Route  path={"/blog/:id"} component={PostPage}/>


                <Route path={"/shop"} component={Shop}/>
            </Routera>
            </Router>
    );
}

export default App;
