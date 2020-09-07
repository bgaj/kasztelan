import React from "react";
import {Grid, Col, Row, Table} from 'react-bootstrap';
import api from '../api'
import Sidebar from "../containers/Sidebar";
import {Helmet} from "react-helmet";

class Schedule extends React.Component {

  state = {
    products: []
  }

  componentDidMount(){
    let self = this
    api.loadProducts().then( resp => {
      self.setState({products: resp.data.data})
    })
  }

  render() {
    const { products } = this.state
    return (
      <React.Fragment>
        <Helmet>
          <title>Gadżet - Kasztelan Rozprza</title>
          <meta name="description" content="Gadżety Kasztelan Rozprza" />
        </Helmet>
        <div className='content'>
          <h1>Sklep</h1>
          <Grid>
            <Row>
              <Col xs={12} sm={8}>
                <Row>
                  {products.map( p => {
                    const { name, leading_image, price, url } = p.attributes
                    return(
                      <Col key={p.id} lg={6} xs={6} className='mobile-full'>
                        <div className='shop-item__box'>
                          <a href={url} target="_blank">
                            <img src={leading_image} />
                            <div className='shop-item__title'>
                              <div className='shop-item__name'>{name}</div>
                              <div className='shop-item__price'>{price} zł</div>
                            </div>
                          </a>
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
export default Schedule;
