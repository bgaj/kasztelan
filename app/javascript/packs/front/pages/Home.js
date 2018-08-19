import React from "react";
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import {Grid, Col, Row} from 'react-bootstrap';
import MyImage from 'images/kids.png'
import api from '../api'
import Sidebar from "../containers/Sidebar";
import {Helmet} from "react-helmet";

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
            speed: 500,
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
                                            const src = image ? image : 'https://kasztelanrozprza.pl/wp-content/uploads/2018/01/DSC_2768.jpg'
                                            return(
                                               <div key={post.id} className="slider__element">
                                                   <img src={src} />
                                                   <div className='slider__overlay'>
                                                       <div className='slider__info'>
                                                           <p>Aktualności</p>
                                                           <h2>{title}</h2>
                                                           <Link to={`aktualnosci/${slug}`}>Czytaj więcej</Link>
                                                       </div>
                                                   </div>
                                               </div>
                                            )
                                        })}
                                    </Slider>
                                </div>
                                <div className="kids" style={{backgroundImage: `url(${MyImage})`}}>
                                    <h2>Zapraszamy na treningi mini siatkówki</h2>
                                    <a>Zobacz więcej</a>
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