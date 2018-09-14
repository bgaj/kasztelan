import React from "react";
import {Grid} from 'react-bootstrap';
import Background from 'images/sponsors/green.jpg'
import {connect} from "react-redux";

class Sponsors extends React.Component {

    render() {
        const { sponsors } = this.props
        return (
            <React.Fragment>
                <div className="sponsors" style={{backgroundImage: `url(${Background})`}}>
                    <Grid>
                        <h3>Partnerzy</h3>
                        <div className='sponsors__container'>
                            {sponsors.map( sponsor => {
                                return(
                                    <div key={sponsor.id} className='sponsors__box'>
                                        <a target="_blank" href={sponsor.attributes.link} >
                                            <img src={sponsor.attributes.image_small}/>
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