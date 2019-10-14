import React from "react";
import {Grid, Col, Row} from 'react-bootstrap';
import Sidebar from "../containers/Sidebar";
import {Helmet} from "react-helmet";
import api from '../api'

class Team extends React.Component {
    state = {
        players: []
    }

    componentDidMount(){
        this.fetchPlayers()
    }

    componentDidUpdate(prevProps){
        if(this.getId(prevProps) !== this.getId(this.props)){
            this.fetchPlayers(this.getId(this.props))
        }
    }

    getId = (props) => {
        return props.match.params.id
    }

    fetchPlayers = () => {
        let self = this
        const id = this.getId(this.props)
        api.loadPlayers(id).then( resp => {
            self.setState({players: resp.data.data})
        }).catch( error => {
            self.props.history.push('/404')
        })
    }

    render() {
        const { players } = this.state
        return (
            <React.Fragment>
                <Helmet>
                    <title>Kasztelan Rozprza</title>
                    <meta name="description" content="Wszystkie najważniejsze informacje na temat klubu w jednym miejscu" />
                </Helmet>
                <div className='content club'>
                    <h1>Kadra</h1>
                    <Grid>
                        <Row>
                            <Col xs={12} sm={8}>
                                <Row>
                                    {players.map( p => {
                                        const { name, surname, number, position_name, image, grid} = p.attributes
                                        return(
                                            <Col key={p.id} lg={grid} xs={6} className='mobile-full'>
                                                <div className="player">
                                                    <img src={image} />
                                                    <div className="player__box">
                                                        <span className="player__number">{number}</span>
                                                        <span className="player__info">
                                                    <span className="player__name">{name}</span>
                                                    <span className="player__surname">{surname}</span>
                                                    <span className="player__position">{position_name}</span>
                                                </span>
                                                    </div>
                                                </div>
                                            </Col>
                                        )
                                    })}
                                </Row>
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
export default Team;
