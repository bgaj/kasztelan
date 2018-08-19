import React from "react";
import {Grid, Col, Row, Glyphicon} from 'react-bootstrap';
import Energo from 'images/sponsors/energopik_logo.png'
import Gmina from 'images/sponsors/gmina.png'
import Wizja from 'images/sponsors/wizja_reklamy.png'
import Ball from 'images/background.png'

class Sponsors extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="sponsors">
                    <Grid>
                        <h3>Sponsorzy</h3>
                        <div className='sponsors__container'>
                            <div className='sponsors__box'>
                                <a>
                                    <img src={Energo}/>
                                </a>
                            </div>
                            <div className='sponsors__box'>
                                <a>
                                    <img src={Gmina}/>
                                </a>
                            </div>
                            <div className='sponsors__box'>
                                <a>
                                    <img src={Wizja}/>
                                </a>
                            </div>
                            <div className='sponsors__box'>
                                <a>
                                    <img src={Energo}/>
                                </a>
                            </div>
                            <div className='sponsors__box'>
                                <a>
                                    <img src={Gmina}/>
                                </a>
                            </div>
                            <div className='sponsors__box'>
                                <a>
                                    <img src={Wizja}/>
                                </a>
                            </div>
                            <div className='sponsors__box'>
                                <a>
                                    <img src={Energo}/>
                                </a>
                            </div>
                            <div className='sponsors__box'>
                                <a>
                                    <img src={Gmina}/>
                                </a>
                            </div>
                            <div className='sponsors__box'>
                                <a>
                                    <img src={Wizja}/>
                                </a>
                            </div>
                            <div className='sponsors__box'>
                                <a>
                                    <img src={Energo}/>
                                </a>
                            </div>
                            <div className='sponsors__box'>
                                <a>
                                    <img src={Gmina}/>
                                </a>
                            </div>
                            <div className='sponsors__box'>
                                <a>
                                    <img src={Wizja}/>
                                </a>
                            </div>
                        </div>
                    </Grid>
                </div>
            </React.Fragment>
        );
    }
}
export default Sponsors;