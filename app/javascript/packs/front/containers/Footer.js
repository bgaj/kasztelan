import React from "react";
import {Grid, Col, Row, Glyphicon} from 'react-bootstrap';

class Footer extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="footer">
                    <Grid>
                        <Col sm={5} className="footer__logo">
                            <img src="http://azsczestochowa.pl/wp-content/uploads/2018/01/AZS_LOGO-kopia_white_png.png"/>
                        </Col>
                        <Col sm={2} className="footer__info">
                            <h4>Sprawdź</h4>
                            <div className="footer__text">
                                <a>Aktualności</a><br/>
                                <a>Terminarz</a><br/>
                                <a>Rozgrywki</a><br/>
                            </div>
                        </Col>
                        <Col sm={2} className="footer__info">
                            <h4>Poznaj nas</h4>
                            <div className="footer__text">
                                <a>Klub</a><br/>
                                <a>Sponsorzy</a><br/>
                                <a>Kadra</a><br/>
                                <a>Kontakt</a><br/>
                            </div>
                        </Col>
                        <Col sm={3} className="footer__info">
                            <h4>Dane kontaktowe</h4>
                            <div className="footer__text">
                                ul. Sportowa 12 A <br/>
                                97-340 Rozprza <br/>
                                508 068 569 <br/>
                                grzesiek746@poczta.fm <br/>
                            </div>
                        </Col>
                    </Grid>
                </div>
            </React.Fragment>
        );
    }
}
export default Footer;