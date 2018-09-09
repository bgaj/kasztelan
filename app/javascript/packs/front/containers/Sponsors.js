import React from "react";
import {Grid} from 'react-bootstrap';
import Energo from 'images/sponsors/energopik_logo.png'
import San from 'images/sponsors/san.jpg'
import RolBud from 'images/sponsors/rolbud1.jpg'
import Gimnazjum from 'images/sponsors/gimnazjum.jpg'
import Dobry from 'images/sponsors/dobry_klimat.jpg'
import Gmina from 'images/sponsors/gmina.jpg'
import Wizja from 'images/sponsors/wizja_reklamy.png'
import Background from 'images/sponsors/green.jpg'

class Sponsors extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="sponsors" style={{backgroundImage: `url(${Background})`}}>
                    <Grid>
                        <h3>Sponsorzy</h3>
                        <div className='sponsors__container'>
                            <div className='sponsors__box'>
                                <a>
                                    <img src={San}/>
                                </a>
                            </div>
                            <div className='sponsors__box'>
                                <a>
                                    <img src={Gimnazjum}/>
                                </a>
                            </div>
                            <div className='sponsors__box'>
                                <a>
                                    <img src={Energo}/>
                                </a>
                            </div>
                            <div className='sponsors__box'>
                                <a>
                                    <img src={Dobry}/>
                                </a>
                            </div>
                            <div className='sponsors__box'>
                                <a>
                                    <img src={Wizja}/>
                                </a>
                            </div>
                            <div className='sponsors__box'>
                                <a>
                                    <img src={Gmina}/>
                                </a>
                            </div>
                            <div className='sponsors__box'>
                                <a>
                                    <img src={RolBud}/>
                                </a>
                            </div>
                            <div className='sponsors__box'>
                                <a>
                                    <img src={Wizja}/>
                                </a>
                            </div>
                            <div className='sponsors__box'>
                                <a>
                                    <img src={San}/>
                                </a>
                            </div>
                            <div className='sponsors__box'>
                                <a>
                                    <img src={Energo}/>
                                </a>
                            </div>
                            <div className='sponsors__box'>
                                <a>
                                    <img src={Gimnazjum}/>
                                </a>
                            </div>
                            <div className='sponsors__box'>
                                <a>
                                    <img src={Dobry}/>
                                </a>
                            </div>
                            <div className='sponsors__box'>
                                <a>
                                    <img src={Gmina}/>
                                </a>
                            </div>
                            <div className='sponsors__box'>
                                <a>
                                    <img src={RolBud}/>
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