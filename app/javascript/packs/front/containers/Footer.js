import React from "react";
import {Grid, Col, Row, Glyphicon} from 'react-bootstrap';
import Logo from 'images/logo/negatywny.png'

class Footer extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="footer">
                    <Grid>
                        <div className='footer__row' >
                            <div className="footer__logo">
                                <img src={Logo}/>
                            </div>
                            <div className="footer__info">
                                <h4>Sprawdź</h4>
                                <div className="footer__text">
                                    <a>Aktualności</a><br/>
                                    <a>Terminarz</a><br/>
                                    <a>Rozgrywki</a><br/>
                                </div>
                            </div>
                            <div className="footer__info">
                                <h4>Poznaj nas</h4>
                                <div className="footer__text">
                                    <a>Klub</a><br/>
                                    <a>Sponsorzy</a><br/>
                                    <a>Kadra</a><br/>
                                    <a>Kontakt</a><br/>
                                </div>
                            </div>
                            <div className="footer__info">
                                <h4>Dane kontaktowe</h4>
                                <div className="footer__text">
                                    ul. Sportowa 12 A <br/>
                                    97-340 Rozprza <br/>
                                    508 068 569 <br/>
                                    grzesiek746@poczta.fm <br/>
                                </div>
                            </div>
                        </div>
                    </Grid>
                </div>
            </React.Fragment>
        );
    }
}
export default Footer;