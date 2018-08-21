import React from "react";
import { Link } from 'react-router-dom';
import {Grid, Col, Row, Table} from 'react-bootstrap';
import api from '../api'
import Sidebar from "../containers/Sidebar";
import {Helmet} from "react-helmet";
import Moment from 'react-moment';

class Schedule extends React.Component {

    state = {
        matches: null
    }

    componentDidMount(){
        let self = this
        api.loadSchedule().then( resp => {
            self.setState({matches: resp.data.data})
        })
    }

    getScore = (result) => {
        if(!result) return '- : -'
        let guest = 0;
        let home = 0;
        result.split(',').map( set => {
            const parts = set.split(':')
            if(parts[0]>parts[1]){
                home +=1;
            }
            else{
                guest +=1;
            }
        })
        return `${home} : ${guest}`
    }

    render() {
        const { matches } = this.state
        if(!matches) return null
        let prev_type = null
        return (
            <React.Fragment>
                <Helmet>
                    <title>Tabela - Kasztelan Rozprza</title>
                    <meta name="description" content="Tabela II Ligi Siatkarskiej Mężczyzn w sezonie 2018/2019" />
                </Helmet>
                <div className='content'>
                    <Grid>
                        <h1>Terminarz</h1>
                        <Row>
                            <Col xs={12} sm={8}>
                                <div className='box schedule'>
                                    {matches.map( match => {
                                        const { home, home_logo, guest, guest_logo, result, match_date, match_time, match_type} = match.attributes
                                        const show_name = match_type !== prev_type
                                        const score = this.getScore(result)
                                        prev_type = match_type
                                        return(
                                            <div key={match.id}>
                                                {show_name && <p className='schedule__type'><span>{match_type}</span></p>}
                                                <div className='schedule__match'>
                                                   <div className='schedule__teams'>
                                                       <div className='schedule__team'>
                                                           <img src={home_logo}/>
                                                           <span>{home}</span>
                                                       </div>
                                                       <span className='schedule__vs'>vs</span>
                                                       <div className='schedule__team'>
                                                           <img src={guest_logo}/>
                                                           <span>{guest}</span>
                                                       </div>
                                                   </div>
                                                   <div className='schedule__time'><Moment date={match_date} format="LL" /></div>
                                                    <div className='schedule__score'>{score}</div>
                                                </div>
                                            </div>
                                        )
                                    })}
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
export default Schedule;