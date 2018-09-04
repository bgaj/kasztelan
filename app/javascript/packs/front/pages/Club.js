import React from "react";
import {Grid, Col, Row} from 'react-bootstrap';
import Sidebar from "../containers/Sidebar";
import {Helmet} from "react-helmet";

class Club extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <title>Kasztelan Rozprza</title>
                    <meta name="description" content="Wszystkie najważniejsze informacje na temat klubu w jednym miejscu" />
                </Helmet>
                <div className='content'>
                    <Grid>
                        <Row>
                            <Col xs={12} sm={8}>
                                <h1>LUMKS KASZTELAN ROZPRZA</h1>
                                <div className="box">
                                    <div className="box__title">
                                        <h4>Historia Klubu</h4>
                                    </div>
                                    <div>
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