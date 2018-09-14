import React from "react";
import {Grid, Col, Row} from 'react-bootstrap';
import {Helmet} from "react-helmet";
import {connect} from "react-redux";


class Sponsors extends React.Component {

    render() {
        const { sponsors } = this.props
        return (
            <React.Fragment>
                <Helmet>
                    <title>Kasztelan Rozprza</title>
                    <meta name="description" content="Wszystkie najważniejsze informacje na temat klubu w jednym miejscu" />
                </Helmet>
                <div className='content club'>
                    <h1>Partnerzy</h1>
                    <Grid>
                        <div className='sponsors__container '>
                            {sponsors.map( sponsor => {
                                return(
                                    <div key={sponsor.id} className='sponsors__box sponsors__box--page'>
                                        <a target="_blank" href={sponsor.attributes.link} >
                                            <img src={sponsor.attributes.image}/>
                                        </a>
                                    </div>
                                )
                            })}
                        </div>
                    </Grid>
                </div>
            </React.Fragment>
        );
    }
}
export default connect(
    state => ({
        sponsors: state.sponsors.sponsors,
    }),
    {}
)(Sponsors)