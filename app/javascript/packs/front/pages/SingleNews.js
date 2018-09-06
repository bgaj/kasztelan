import React from "react";
import {Grid, Col, Row, Glyphicon} from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import Sidebar from "../containers/Sidebar";
import Moment from 'react-moment';
import api from "../api";
import Loader from "../components/Loader";
import {Helmet} from "react-helmet";
import { img_url } from '../lib/helper'

class News extends React.Component {

    state = {
        post: null,
        fetching: true,
        pageCount: 0,
        initialPage: null
    }

    componentDidMount(){
        const { match, location } = this.props;
        const { slug } = match.params;
        let params = new URLSearchParams(location.search);
        const data = {}
        if(params.get('uuid')){
            data.uuid = params.get('uuid')
        }
        this.loadData(slug, data)
    }

    componentDidUpdate(props){
        const slug = this.props.match.params.slug
        if(slug != props.match.params.slug && !this.state.fetching){
            this.loadData(slug)
            window.scrollTo(0, 0)
        }
    }

    loadData = (slug, data) => {
        let self = this
        this.setState({fetching: true})
        api.loadPost(slug, data).then( resp => {
            self.setState({post: resp.data.data, fetching: false})
        }).catch(e => {
            self.setState({fetching: false})
        })
    }


    render() {
        const { post, fetching } = this.state
        if(!post && !fetching){
            return <Redirect to='/aktualnosci' />
        }
        if(!post) return null
        const { content, image, date, title, other_posts,meta_description } = post.attributes
        const sidebar_posts = other_posts.data
        return (
            <React.Fragment>
               <div id="single_news" className="single_news" >
                   <Grid>
                       <Col sm={8}>
                           {fetching ? <Loader/>  :
                               <div className="single_news__box">
                                   <Helmet>
                                       <title>{title} - Kasztelan Rozprza</title>
                                       <meta name="description" content={meta_description} />
                                       <meta property="og:locale" content="pl_PL"/>
                                       <meta property="og:type" content="article"/>
                                       <meta property="og:title" content={title}/>
                                       <meta property="og:description" content={meta_description}/>
                                       <meta property="og:url" content={window.location.href}/>
                                       <meta property="og:site_name" content="Kasztelan Rozprza"/>
                                       <meta property="og:image" content={`${window.location.origin}${img_url(image)}`}/>
                                   </Helmet>
                                   <img className="single_news__image" src={img_url(image)}/>
                                   <div className="single_news__content">
                                       <h1>
                                           {title}
                                       </h1>
                                       <span className="article__time article__time--big"><Glyphicon glyph={'time'}/> Utworzono: <Moment date={date} format="LL" /></span>
                                       <p dangerouslySetInnerHTML={{__html: content}}></p>
                                   </div>
                               </div>
                           }
                       </Col>
                       <Col sm={4}>
                           <div className='box'>
                               <div className='box__title'>
                                   <h4>Zobacz także</h4>
                               </div>
                               {sidebar_posts.map (post => {
                                   const { slug, image_small, date, title } = post.attributes
                                   return(
                                       <div key={slug} className="sidebar-article">
                                           <Link to={`/aktualnosci/${slug}`}>
                                               <img src={image_small}/>
                                               <h3>{title} <span className="article__time"><Moment date={date} format="LL"/></span></h3>
                                           </Link>
                                       </div>
                                   )
                               })}
                           </div>
                           <Sidebar/>
                       </Col>
                   </Grid>
               </div>
            </React.Fragment>
        );
    }
}
export default News;