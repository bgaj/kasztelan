import React from "react";
import {Grid, Col, Row, Table} from 'react-bootstrap';
import api from '../api'
import Sidebar from "../containers/Sidebar";
import {Helmet} from "react-helmet";

class Schedule extends React.Component {

    state = {
        products: []
    }

    componentDidMount(){
        let self = this
        api.loadProducts().then( resp => {
            self.setState({products: resp.data.data})
        })
    }

    render() {
        const { products } = this.state
        return (
            <React.Fragment>
                <Helmet>
                    <title>Gadżet - Kasztelan Rozprza</title>
                    <meta name="description" content="Gadżety Kasztelan Rozprza" />
                </Helmet>
                <div className='content'>
                    <Grid>
                        <h1>Gadżety</h1>
                        <Row>
                            <Col xs={12} sm={8}>
                                <Grid>
                                    <Col sm={6}>
                                        <div>
                                            <img />
                                            <p>Nazwa produktu</p>
                                        </div>
                                    </Col>
                                </Grid>
                            </Col>
                            <Col xs={12} sm={4}>
                               <Sidebar/>
                            </Col>
                        </Row>
                    </Grid>
                </div>
            </React.Fragment>
        );
    }
}
export default Schedule;
