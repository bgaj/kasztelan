import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from "./containers/Header";
import Home from "./pages/Home";
import News from "./pages/News";
import SingleNews from "./pages/SingleNews";
import Sponsors from "./containers/Sponsors";
import Footer from "./containers/Footer";
class App extends Component {

    render(){
        return(
            <Router>
                <div>
                    <Header/>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/aktualnosci' component={News} />
                        <Route path='/aktualnosci/:slug' component={SingleNews} />
                    </Switch>
                    <Sponsors/>
                    <Footer/>
                </div>
            </Router>
            )
    }
}
export default App;