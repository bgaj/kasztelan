import React from "react";
import {Grid} from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
                                    <Link to="/aktualnosci">Aktualności</Link><br/>
                                    <Link to="/terminarz/2019-2020">Terminarz</Link><br/>
                                    <Link to="/tabela">Tabele</Link><br/>
                                </div>
                            </div>
                            <div className="footer__info">
                                <h4>Poznaj nas</h4>
                                <div className="footer__text">
                                    <Link to='/klub'>Klub</Link><br/>
                                    <Link to='/partnerzy'>Partnerzy</Link><br/>
                                    <Link to='/kadra/2018-2019'>Kadra</Link><br/>
                                    <Link to='/kontakt'>Kontakt</Link>
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