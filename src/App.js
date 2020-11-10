import React from 'react';
import { HashRouter as Router, Route} from 'react-router-dom';
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


const App = () => {
        return (
            <Router basename={process.env.PUBLIC_URL}>
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
            </Router>
        );
}

export default App;
