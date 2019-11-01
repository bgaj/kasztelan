import React from "react";
import {Grid, Col, Row} from 'react-bootstrap';
import {Helmet} from "react-helmet";
import {connect} from "react-redux";


class Sponsors extends React.Component {

  sponsorRender = (sponsor, sponsorClass, small = true) => {
    return(
      <div key={sponsor.id} className={sponsorClass}>
        <a target="_blank" href={sponsor.attributes.link} >
          <img src={ small ? sponsor.attributes.image_small : sponsor.attributes.image }/>
        </a>
      </div>
    )
  }

  render() {
    const { sponsors } = this.props
    const main = sponsors.filter( sponsor => sponsor.attributes.main )
    const others = sponsors.filter( sponsor => !sponsor.attributes.main )
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
              <div style={{width: '100%'}}>
                {main.map( sponsor => this.sponsorRender(sponsor, 'sponsors__box sponsors__box--big sponsors__box--page', false))}
              </div>
              {others.map( sponsor => this.sponsorRender(sponsor, 'sponsors__box sponsors__box--page', false ))}
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