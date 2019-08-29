import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from "./pages/Home";
import News from "./pages/News";
import TablePage from "./pages/TablePage";
import Schedule from "./pages/Schedule";
import Layout from "./components/Layout"
import SingleNews from "./pages/SingleNews";
import Sponsors from "./pages/Sponsors";
import Team from "./pages/Team";
import Club from "./pages/Club";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import {connect} from "react-redux";
import { loadPrevMatch } from "./actions/prev_match";
import { loadNextMatch } from './actions/next_match'
import { loadSponsors } from './actions/sponsors'
import ScrollTop from './containers/ScrollTop'

class App extends Component {

    componentDidMount(){
        this.props.loadPrevMatch();
        this.props.loadNextMatch();
        this.props.loadSponsors();
    }

    render(){
        return(
            <Router>
                <div>
                    <ScrollTop>
                        <Layout>
                            <Switch>
                                <Route exact path='/' component={Home} />
                                <Route exact path='/tabela' component={TablePage} />
                                <Route exact path='/terminarz/:id' component={Schedule} />
                                <Route exact path='/klub' component={Club} />
                                <Route exact path='/kontakt' component={Contact} />
                                <Route exact path='/aktualnosci' component={News} />
                                <Route exact path='/partnerzy' component={Sponsors} />
                                <Route exact path='/kadra/:id' component={Team} />
                                <Route exact path='/sklep' component={Shop} />
                                <Route path='/aktualnosci/:slug' component={SingleNews} />
                                <Route path='*' component={NotFound} />
                            </Switch>
                        </Layout>
                    </ScrollTop>
                </div>
            </Router>
            )
    }
}
export default connect(
    state => ({
    }),
    { loadPrevMatch, loadNextMatch, loadSponsors }
)(App)