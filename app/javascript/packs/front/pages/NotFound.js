import React from "react";
import {Grid, Col, Row} from 'react-bootstrap';
import Sidebar from "../containers/Sidebar";
import {Helmet} from "react-helmet";

class NotFound extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <title>Kasztelan Rozprza</title>
                    <meta name="description" content="" />
                </Helmet>

                <div className='content'>
                    <h1>404</h1>
                    <Grid>
                        <Row>
                            <Col xs={12} sm={8}>
                                <div className="box">
                                    <div className="box__title">
                                        <h2 className="contact__title">Strona nie istnieje</h2>
                                    </div>
                                </div>
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
export default NotFound;