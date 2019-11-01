import React from "react";
import {Grid} from 'react-bootstrap';
import Background from 'images/sponsors/green.jpg'
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
        <div className="sponsors" style={{backgroundImage: `url(${Background})`}}>
          <Grid>
            { main.length > 0 &&
              <div>
                <h3>Partner strategiczny</h3>
                <div className='sponsors__container'>
                  {main.map( sponsor => {
                    return this.sponsorRender(sponsor, 'sponsors__box sponsors__box--big', false)
                  })}
                </div>
              </div>
            }
            <h3>Partnerzy</h3>
            <div className='sponsors__container'>
              {others.map( sponsor => {
                return this.sponsorRender(sponsor, 'sponsors__box')
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