import React from "react";
import {Grid, Col, Row} from 'react-bootstrap';
import Sidebar from "../containers/Sidebar";
import {Helmet} from "react-helmet";
import Logo from 'images/logo/kasztelan9.png'

class Team extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <title>Kasztelan Rozprza</title>
                    <meta name="description" content="Wszystkie najważniejsze informacje na temat klubu w jednym miejscu" />
                </Helmet>
                <div className='content club'>
                    <h1>Kadra</h1>
                    <Grid>
                        <Row>
                            <Col xs={12} sm={8}>
                                <div className="box temp">
                                    <img className="" src={Logo} />
                                    <p>Strona w trakcie przygotowywania.<br/>
                                    Prosimy o cierpliwość</p>
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
export default Team;