import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Header from "../containers/Header";
import Footer from "../containers/Footer";
import Sponsors from "../containers/Sponsors";

class Layout extends Component {

    render() {
        const { location, history } = this.props
        return(
            <div>
                <Header/>
                {this.props.children}
                <Sponsors/>
                <Footer/>
            </div>
            )
    }
}

export default withRouter(Layout)
