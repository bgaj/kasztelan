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
                                        <h2 className="">LUMKS Kasztelan Rozprza</h2>
                                    </div>
                                    <div className="club__content">
                                        <img className="club__logo" src={Logo} />
                                        <p>Ludowy Uczniowski Międzyszkolny
                                            Klub Sportowy Kasztelan Rozprza
                                            został założony 1 stycznia 2007
                                            roku. Jego powstanie było
                                            odpowiedzią na stale rosnące
                                            zainteresowanie siatkówką halową
                                            w naszym regionie. </p>
                                        <p>Celem klubu była aktywizacja młodych ludzi, możliwość
                                            rozwijania swoich pasji oraz reprezentacji rozpierskich barw w
                                            rozgrywkach III ligi mężczyzn na arenie wojewódzkiej.</p>
                                        <p>
                                            Praca z młodzieżą, dobra organizacja klubu oraz wsparcie
                                            lokalnej społeczności przyczyniły się do tego, że Kasztelan
                                            Rozprza od 10 lat na stałe zadomowił się na siatkarskiej mapie
                                            regionu łódzkiego. Na bogatą historię klubu zalicza się wiele
                                            sukcesów na arenie wojewódzkiej oraz ogólnopolskiej. W
                                            ostatnich latach seniorska drużyna Kasztelana Rozprza jest
                                            coraz bliżej awansu do wyższej ligi rozgrywek. Mamy
                                            nadzieje, że 10. rok działalności klubu przyniesie kolejne
                                            sukcesy, które przyczynią się do ciągłego kreowania dobrej
                                            marki zespołu na arenie wojewódzkiej, a także i całego kraju.</p>
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