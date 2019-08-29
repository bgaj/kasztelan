import React from "react";
import { Link } from 'react-router-dom';
import {Grid, Col, Row, Glyphicon} from 'react-bootstrap';
import Drawer from '@material-ui/core/Drawer';
import Logo from 'images/logo/kasztelan9.png'
import Responsive from 'react-responsive';
import Dropdown from "../components/MyDropdown"

const Desktop = props => <Responsive {...props} minWidth={992} />;
const Mobile = props => <Responsive {...props} maxWidth={991} />;

class Header extends React.Component {
    state = {
        drawer: false
    }

    toggleDrawer = (open) => () => {
        this.setState({
            drawer: open,
        });
    };
    render() {
        const { drawer } = this.state
        return (
            <React.Fragment>
                {/* Material App Bar */}
                <div className="header">
                    <Desktop>
                        <div className="header__logo">
                            <Link to='/'>
                                <img src={Logo}/>
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
                                                <Dropdown title="Kadra">
                                                    <ul>
                                                        <li>
                                                            <Link to='/kadra/2018-2019'>Sezon 2018/2019</Link>
                                                        </li>
                                                    </ul>
                                                </Dropdown>
                                            </li>
                                            <li>
                                                <Link to='/klub'>Klub</Link>
                                            </li>
                                        </ul>
                                    </Col>
                                    <Col sm={6} className="header__skew header__skew--right">
                                        <ul className="header__list header__list--right">
                                            <li>
                                                <Dropdown title="Rozgrywki">
                                                    <ul>
                                                        <li>
                                                            <Link to='/terminarz/2018-2019'>Sezon 2018/2019</Link>
                                                        </li>
                                                        <li>
                                                            <Link to='/terminarz/2019-2020'>Sezon 2019/2020</Link>
                                                        </li>
                                                    </ul>
                                                </Dropdown>
                                            </li>
                                            <li>
                                                <Link to='/partnerzy'>Partnerzy</Link>
                                            </li>
                                            <li>
                                                <Link to='/kontakt'>Kontakt</Link>
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
                                    <img src={Logo}/>
                                </Link>
                                <span></span>
                            </div>
                        </Grid>
                        <Drawer open={drawer} onClose={this.toggleDrawer(false)}>
                            <div
                                tabIndex={0}
                                role="button"
                                className="drawer"
                            >
                                <div onClick={this.toggleDrawer(false)} onKeyDown={this.toggleDrawer(false)} className="drawer__top">
                                    <Link to='/'>
                                        <img src={Logo}/>
                                    </Link>
                                </div>
                                <ul>
                                    <li onClick={this.toggleDrawer(false)} onKeyDown={this.toggleDrawer(false)}>
                                        <Link to='/aktualnosci'>Aktualności</Link>
                                    </li>
                                    <li onClick={this.toggleDrawer(false)} onKeyDown={this.toggleDrawer(false)}>
                                        <Link to='/kadra'>Kadra</Link>
                                    </li>
                                    <li>
                                        <Dropdown title="Kadra" mobile={true}>
                                            <ul>
                                                <li onClick={this.toggleDrawer(false)} onKeyDown={this.toggleDrawer(false)}>
                                                    <Link to='/kadra/2018-2019'>Sezon 2018/2019</Link>
                                                </li>
                                            </ul>
                                        </Dropdown>
                                    </li>
                                    <li>
                                        <Dropdown title="Rozgrywki" mobile={true}>
                                            <ul>
                                                <li onClick={this.toggleDrawer(false)} onKeyDown={this.toggleDrawer(false)}>
                                                    <Link to='/terminarz/2018-2019'>Sezon 2018/2019</Link>
                                                </li>
                                                <li onClick={this.toggleDrawer(false)} onKeyDown={this.toggleDrawer(false)}>
                                                    <Link to='/terminarz/2019-2020'>Sezon 2019/2020</Link>
                                                </li>
                                            </ul>
                                        </Dropdown>
                                    </li>
                                    <li onClick={this.toggleDrawer(false)} onKeyDown={this.toggleDrawer(false)}>
                                        <Link to='/partnerzy'>Partnerzy</Link>
                                    </li>
                                    <li onClick={this.toggleDrawer(false)} onKeyDown={this.toggleDrawer(false)}>
                                        <Link to='/kontakt'>Kontakt</Link>
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