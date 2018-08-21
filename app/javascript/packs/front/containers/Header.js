import React from "react";
import { Link } from 'react-router-dom';
import {Grid, Col, Row, Glyphicon} from 'react-bootstrap';
import Drawer from '@material-ui/core/Drawer';
import Responsive from 'react-responsive';

const Desktop = props => <Responsive {...props} minWidth={992} />;
const Mobile = props => <Responsive {...props} maxWidth={991} />;

class Header extends React.Component {
    state = {
        drawer: false
    }

    toggleDrawer = (open) => () => {
        console.log(open)
        this.setState({
            drawer: open,
        });
    };
    render() {
        const { drawer } = this.state
        console.log(drawer)
        return (
            <React.Fragment>
                {/* Material App Bar */}
                <div className="header">
                    <Desktop>
                        <div className="header__logo">
                            <Link to='/'>
                                <img src="http://azsczestochowa.pl/wp-content/uploads/2018/01/azs_logo.png"/>
                            </Link>
                        </div>
                        <div style={{background: '#292c31'}}>
                            <Grid>
                                <Row className="header__menu">
                                    <Col sm={6} className="header__skew header__skew--left">
                                        <ul className="header__list">
                                            <li>
                                                <Link to='/aktualnosci'>Aktualności</Link>
                                            </li>
                                            <li>
                                                <Link to='/aktualnosci'>Kadra</Link>
                                            </li>
                                            <li>
                                                <a>Klub</a>
                                            </li>
                                        </ul>
                                    </Col>
                                    <Col sm={6} className="header__skew header__skew--right">
                                        <ul className="header__list header__list--right">
                                            <li>
                                                <Link to='/terminarz'>Rozgrywki</Link>
                                            </li>
                                            <li>
                                                <a>Sponsorzy</a>
                                            </li>
                                            <li>
                                                <a>Kontakt</a>
                                            </li>
                                        </ul>
                                    </Col>
                                </Row>
                            </Grid>
                        </div>
                    </Desktop>
                    <Mobile>
                        <Grid>
                            <div className="mobile_header">
                                <Glyphicon onClick={this.toggleDrawer(true)} glyph={'menu-hamburger'} />
                                <Link to='/'>
                                    <img src="http://azsczestochowa.pl/wp-content/uploads/2018/01/azs_logo.png"/>
                                </Link>
                                <span></span>
                            </div>
                        </Grid>
                        <Drawer open={drawer} onClose={this.toggleDrawer(false)}>
                            <div
                                tabIndex={0}
                                role="button"
                                className="drawer"
                                onClick={this.toggleDrawer(false)}
                                onKeyDown={this.toggleDrawer(false)}
                            >
                                <div className="drawer__top">
                                    <Link to='/'>
                                        <img src="http://azsczestochowa.pl/wp-content/uploads/2018/01/azs_logo.png"/>
                                    </Link>
                                </div>
                                <ul>
                                    <li>
                                        <Link to='/aktualnosci'>Aktualności</Link>
                                    </li>
                                    <li>
                                        <Link to='/aktualnosci'>Kadra</Link>
                                    </li>
                                    <li>
                                        <a>Klub</a>
                                    </li>
                                    <li>
                                        <a>Rozgrywki</a>
                                    </li>
                                    <li>
                                        <a>Sponsorzy</a>
                                    </li>
                                    <li>
                                        <a>Kontakt</a>
                                    </li>
                                </ul>
                            </div>
                        </Drawer>
                    </Mobile>
                </div>
            </React.Fragment>
        );
    }
}
export default Header;