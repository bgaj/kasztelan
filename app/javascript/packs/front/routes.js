import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from "./pages/Home";
import News from "./pages/News";
import TablePage from "./pages/TablePage";
import Schedule from "./pages/Schedule";
import Layout from "./components/Layout"
import SingleNews from "./pages/SingleNews";
import Club from "./pages/Club";
import {connect} from "react-redux";
import { loadPrevMatch } from "./actions/prev_match";
import { loadNextMatch } from './actions/next_match'
import ScrollTop from './containers/ScrollTop'

class App extends Component {

    componentDidMount(){
        this.props.loadPrevMatch();
        this.props.loadNextMatch();
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
                                <Route exact path='/terminarz' component={Schedule} />
                                <Route exact path='/klub' component={Club} />
                                <Route exact path='/aktualnosci' component={News} />
                                <Route path='/aktualnosci/:slug' component={SingleNews} />
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
    { loadPrevMatch, loadNextMatch }
)(App)