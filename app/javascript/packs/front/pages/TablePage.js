import React from "react";
import { Link } from 'react-router-dom';
import {Grid, Col, Row, Table} from 'react-bootstrap';
import api from '../api'
import Sidebar from "../containers/Sidebar";
import {Helmet} from "react-helmet";
import orderBy from 'lodash.orderby'

class TablePage extends React.Component {

    state = {
        data: null
    }

    componentDidMount(){
        let self = this
        api.loadSeason().then( resp => {
            const table = this.tableData(resp.data.data)
            self.setState({data: resp.data.data , table: table})
        })
    }

    matchResult = (result) => {
        let home = { set: 0, points: 0, small_points: 0}
        let guest = { set: 0, points: 0, small_points: 0}
        result.split(',').map( set => {
            const set_data = set.split(':')
            home.small_points += parseInt(set_data[0])
            guest.small_points += parseInt(set_data[1])
            if(parseInt(set_data[0]) > parseInt(set_data[1])){
                home.set += 1
            }
            else{
                guest.set += 1
            }
        })
        const match_points = this.matchPoints(home.set, guest.set)
        home.points = match_points[0]
        guest.points = match_points[1]
        return({home, guest})
    }

    matchPoints = (set_home, set_guest) => {
        if(set_home < 2) return [0,3]
        if(set_guest < 2) return [3,0]
        if(set_home === 2) return [1,2]
        if(set_guest === 2) return [2,1]
    }

    tableData = (data) => {
        let table = {}
        data.attributes.rounds.map( round => {
            round.matches.map( match => {
                if(!table[match.home]){
                    table[match.home] = { id: match.home, points: 0, set_plus: 0.01, set_minus: 0.01, matches: 0, points_plus: 0.01, points_minus: 0.01 }
                }
                if(!table[match.guest]){
                    table[match.guest] = { id: match.guest, points: 0, set_plus: 0.01, set_minus: 0.01, matches: 0, points_plus: 0.01, points_minus: 0.01 }
                }
                if(match.result){
                    const match_data = this.matchResult(match.result)
                    table[match.home].points += match_data.home.points
                    table[match.home].matches += 1
                    table[match.home].set_plus += match_data.home.set
                    table[match.home].set_minus += match_data.guest.set
                    table[match.home].points_plus += match_data.home.small_points
                    table[match.home].points_minus += match_data.guest.small_points
                    table[match.guest].points += match_data.guest.points
                    table[match.guest].matches += 1
                    table[match.guest].set_plus += match_data.guest.set
                    table[match.guest].set_minus += match_data.home.set
                    table[match.guest].points_plus += match_data.guest.small_points
                    table[match.guest].points_minus += match_data.home.small_points
                }
            })
        })
        Object.keys(table).forEach(function(key,index) {
            table[key].set_ratio = parseFloat( table[key].set_plus / table[key].set_minus, 10 )
            table[key].points_ratio = parseFloat( table[key].points_plus / table[key].points_minus, 10 )
        });
        return orderBy(table, ['points', 'set_ratio'], ['desc', 'desc'])
    }

    render() {
        const { data, table } = this.state
        if(!data) return null
        const teams = data.attributes.teams
        console.log(table)
        return (
            <React.Fragment>
                <Helmet>
                    <title>Tabela - Kasztelan Rozprza</title>
                    <meta name="description" content="Tabela II Ligi Siatkarskiej Mężczyzn w sezonie 2018/2019" />
                </Helmet>
                <div className='content'>
                    <Grid>
                        <Row>
                            <Col xs={12} sm={8}>
                                <div className='box'>
                                    <div className='box__title'>
                                        <h4>{data.attributes.full_name}</h4>
                                    </div>
                                    <div>
                                        <Table responsive>
                                            <thead>
                                            <tr>
                                                <th>Drużyna</th>
                                                <th>Pkt</th>
                                                <th>Mecze</th>
                                                <th>Sety</th>
                                                <th>Punkty</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                                {table.map( row => {
                                                    const team = teams.filter( t => t.id === row.id)[0]
                                                    if(!team) return null
                                                    return(
                                                        <tr key={row.id}>
                                                            <td>
                                                                <div>
                                                                    <span className='table-logo'><img src={team.logo}/></span>
                                                                    <span className='table-name'>{team.name}</span>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                {row.points}
                                                            </td>
                                                            <td>
                                                                {row.matches}
                                                            </td>
                                                            <td>
                                                                {row.set_plus.toFixed(0)}:{row.set_minus.toFixed(0)}
                                                            </td>
                                                            <td>
                                                                {row.points_plus.toFixed(0)}:{row.points_minus.toFixed(0)}
                                                            </td>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </Table>
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
export default TablePage;