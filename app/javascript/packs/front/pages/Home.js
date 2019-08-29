import React from "react";
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import {Grid, Col, Row} from 'react-bootstrap';
import api from '../api'
import Sidebar from "../containers/Sidebar";
import {Helmet} from "react-helmet";
import { img_url } from '../lib/helper'

class Home extends React.Component {

    state = {
        posts: []
    }

    componentDidMount(){
        let self = this
        api.loadHome().then( resp => {
            self.setState({posts: resp.data.data})
        })
    }

    render() {
        const { posts } = this.state
        const settings = {
            dots: true,
            arrows: false,
            infinite: true,
            adaptiveHeight: true,
            draggable: false,
            speed: 500,
            fade: true,
            autoplay: true,
            speed: 1000,
            autoplaySpeed: 5000,
            slidesToShow: 1,
            slidesToScroll: 1
        };
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
                                <div className="slider">
                                    <Slider {...settings}>
                                        {posts.map( post => {
                                            const { image, slug, title } = post.attributes
                                            return(
                                               <div key={post.id} className="slider__element">
                                                    <Link to={`aktualnosci/${slug}`}>
                                                   <img src={img_url(image)} />
                                                   <div className='slider__overlay'>
                                                       <div className='slider__info'>
                                                           <p>Aktualności</p>
                                                           <h2>{title}</h2>
                                                           <Link to={`aktualnosci/${slug}`}>Pokaż więcej</Link>
                                                       </div>
                                                   </div>
                                                    </Link>
                                               </div>
                                            )
                                        })}
                                    </Slider>
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
export default Home;
