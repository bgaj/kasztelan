import React from "react";
import { Link } from 'react-router-dom';
import {Glyphicon} from 'react-bootstrap';


class Sidebar extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className='box'>
                    <div className='box__title'>
                        <h4>Następny mecz</h4>
                    </div>
                    <div className='match'>
                        <div className='match__title'>II Liga 2018/2019</div>
                        <div className='match__date'>05/05/2018 - 18:00</div>
                        <div className='match__details'>
                            <div className='match__team'>
                                <img src="https://kasztelanrozprza.pl/wp-content/uploads/2017/09/logo1.png" />
                                <span>LUMKS Kasztelan Rozprza</span>
                            </div>
                            <div className='match__score'>3:2</div>
                            <div className='match__team'>
                                <img src="http://kasztelanrozprza.pl/wp-content/uploads/2017/10/ulks1-150x150.png" />
                                <span> MOSIR Sieradz</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='box'>
                    <div className='box__title'>
                        <h4>Poprzedni mecz</h4>
                    </div>
                    <div className='match'>
                        <div className='match__title'>II Liga 2018/2019</div>
                        <div className='match__date'>05/05/2018 - 18:00</div>
                        <div className='match__details'>
                            <div className='match__team'>
                                <img src="https://kasztelanrozprza.pl/wp-content/uploads/2017/09/logo1.png" />
                                <span>LUMKS Kasztelan Rozprza</span>
                            </div>
                            <div className='match__score'>3:2</div>
                            <div className='match__team'>
                                <img src="https://kasztelanrozprza.pl/wp-content/uploads/2017/09/lechia-150x150.png" />
                                <span>KS LECHIA II TOMASZÓW MAZOWIECKI</span>
                            </div>
                        </div>
                    </div>
                </div>

                <a className='social social__facebook'>
                    <div className="social__icon social__icon--facebook">f</div>
                    <div className="social__text">
                        Polub nasz profil
                        <span className='circle'>
                                        <Glyphicon glyph='plus' />
                                    </span>
                    </div>
                </a>
                <a className='social social__green'>
                    <div className="social__icon social__icon--green">f</div>
                    <div className="social__text">
                        Sprawdź terminarz
                        <span className='circle'>
                                        <Glyphicon glyph='plus' />
                                    </span>
                    </div>
                </a>
                <a className='social social__black'>
                    <div className="social__icon social__icon--black">f</div>
                    <div className="social__text">
                        Sprawdź tabelę
                        <span className='circle'>
                                        <Glyphicon glyph='plus' />
                                    </span>
                    </div>
                </a>
            </React.Fragment>
        );
    }
}
export default Sidebar;