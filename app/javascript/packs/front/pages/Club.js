import React from "react";
import {Grid, Col, Row} from 'react-bootstrap';
import Sidebar from "../containers/Sidebar";
import {Helmet} from "react-helmet";
import Gold from 'images/first.png'
import Silver from 'images/second.png'
import Brown from 'images/third.png'
import Logo from 'images/logo/kasztelan9.png'


class Club extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <title>Kasztelan Rozprza</title>
                    <meta name="description" content="Wszystkie najważniejsze informacje na temat klubu w jednym miejscu" />
                </Helmet>
                <div className='content club'>
                    <h1>Klub</h1>
                    <Grid>
                        <Row>
                            <Col xs={12} sm={8}>
                                <div className="box">
                                    <div className="box__title">
                                        <h2 style={{fontWeight: 'bold'}}>LUMKS Kasztelan Rozprza</h2>
                                    </div>
                                    <div className="club__content">
                                        <img className="club__logo" src={Logo} />
                                        <p>Ludowy Uczniowski Międzyszkolny Klub Sportowy Kasztelan Rozprza został założony 1 stycznia 2007 roku. Jego powstanie było odpowiedzią na stale rosnące zainteresowanie siatkówką halową w naszym regionie. Celem klubu jest aktywizacja młodych ludzi oraz dawanie im możliwości rozwijania swoich pasji.</p>
                                        <p>Nasz zespół już od ponad dziesięciu lat z dumą reprezentuje gminę rozprza oraz region piotrkowski w rozgrywkach ligowych. Mądre zarządzanie klubem, praca z młodzieżą oraz wsparcie lokalnej społeczności przyczyniły się do znaczącego rozwoju naszego zespołu. Aktualnie Kasztelan Rozprza jest mocną i rozpoznawalną marką w regionie łódzkim. Nasi zawodnicy od wielu lat odnoszą liczne sukcesy na arenie wojewódzkiej i ogólnopolskiej. Największym z nich jest niewątpliwie awans do rozgrywek II ligi PZPS, który otwiera nowy ważny okres w działalności naszego klubu.</p>
                                        <p>Przed naszym klubem stoi wiele wyzwań zarówno sportowych jak i organizacyjnych. Wierzymy jednak, że ciągła ciężka praca oraz wsparcie naszych partnerów przyniesie kolejny sezon pełen sukcesów. Jeśli chcesz poznać prawdziwe piękno siatkówki już dziś zapraszamy Ciebie na kolejne spotkanie Kasztelana. Przyjdź, kibicuj i stań się częścią naszej siatkarskiej rodziny! .</p>
                                    </div>
                                </div>
                                <div className="box">
                                    <div className="box__title">
                                        <h4>Osiągnięcia</h4>
                                    </div>
                                    <div>
                                        <p className="club__success">
                                            <div className="club__name"><span>III liga mężczyzn województwa łódzkiego</span></div>
                                            <span className="club__medal">
                                                <img className="gold" src={Gold}/>
                                                <span>2017</span>
                                            </span>
                                            <span className="club__medal">
                                                <img src={Silver}/>
                                                <span>2015</span>
                                            </span>
                                        </p>
                                        <p className="club__success">
                                            <div className="club__name"><span>Finał ogólnopolskiego barażu o II ligę mężczyzn</span></div>
                                            <span className="club__medal">
                                                <img className="gold" src={Gold}/>
                                                <span>2018</span>
                                            </span>
                                            <span className="club__medal">
                                                <img src={Silver}/>
                                                <span>2015</span>
                                            </span>
                                            <span className="club__medal">
                                                <img className="brown" src={Brown}/>
                                                <span>2017</span>
                                            </span>
                                        </p>
                                        <p className="club__success">
                                            <div className="club__name"><span>Wojewódzkie mistrzostwa seniorów LZS</span></div>
                                            <span className="club__medal">
                                                <img className="gold" src={Gold}/>
                                                <span>2018</span>
                                            </span>
                                            <span className="club__medal">
                                                <img className="gold" src={Gold}/>
                                                <span>2015</span>
                                            </span>
                                            <span className="club__medal">
                                                <img className="gold" src={Gold}/>
                                                <span>2008</span>
                                            </span>
                                            <span className="club__medal">
                                                <img src={Silver}/>
                                                <span>2016</span>
                                            </span>
                                            <span className="club__medal">
                                                <img src={Silver}/>
                                                <span>2011</span>
                                            </span>
                                            <span className="club__medal">
                                                <img src={Silver}/>
                                                <span>2012</span>
                                            </span>
                                            <span className="club__medal">
                                                <img className="brown" src={Brown}/>
                                                <span>2017</span>
                                            </span>
                                        </p>
                                        <p className="club__success">
                                            <div className="club__name"><span>Wojewódzkie mistrzostwa juniorów LZS</span></div>
                                            <span className="club__medal">
                                                <img className="gold" src={Gold}/>
                                                <span>2010</span>
                                            </span>
                                            <span className="club__medal">
                                                <img src={Silver}/>
                                                <span>2011</span>
                                            </span>
                                        </p>
                                        <p className="club__success">
                                            <div className="club__name"><span>Ogólnopolskie Igrzyska LZS - piłka siatkowa juniorów</span></div>
                                            <span className="club__medal">
                                                <img className="brown" src={Brown}/>
                                                <span>2010</span>
                                            </span>
                                        </p>
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
export default Club;