import React from "react";
import {Grid, Col, Row, Glyphicon} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Sidebar from "../containers/Sidebar";
import ReactPaginate from 'react-paginate';
import api from "../api";
import Moment from 'react-moment';
import {Helmet} from "react-helmet";

class News extends React.Component {

    state = {
        posts: [],
        pageCount: 0,
        fetching: true,
        initialPage: null
    }

    componentDidMount(){
        const { location } = this.props;
        let params = new URLSearchParams(location.search);
        const page = params.get('page') ? parseInt(params.get('page'),10) : 1
        this.setState({initialPage: page - 1})
        this.loadData({page: params.get('page')})
    }

    componentDidUpdate(props){
        const { location } = this.props;
        if(JSON.stringify(location) !== JSON.stringify(props.location) && !this.state.fetching){
            console.log('sss')
            let params = new URLSearchParams(location.search);
            const page = params.get('page') ? parseInt(params.get('page'),10) : 1
            this.setState({initialPage: page - 1})
            this.loadData({page: params.get('page')})
        }
    }

    loadData = (params = {}) => {
        let self = this
        this.setState({fetching: true})
        api.loadPosts(params).then( resp => {
            self.setState({fetching: false, posts: resp.data.data, pageCount: resp.data.links.total_pages})
        })
    }


    pageChange = (data) => {
        const { location, history } = this.props;
        let params = new URLSearchParams(location.search);
        params.set('page', data.selected + 1);

        history.push({
            pathname: location.pathname,
            search: params.toString()
        });
        this.loadData({page: data.selected + 1})
        const element = document.getElementById("articles");
        element.scrollIntoView({behavior: "instant", block: "start"});
    }

    render() {
        const { posts, pageCount, initialPage } = this.state
        return (
            <React.Fragment>
                <Helmet>
                    <title>Aktualności - Kasztelan Rozprza</title>
                    <meta name="description" content="Wszystkie najważniejsze informacje na temat klubu w jednym miejscu" />
                </Helmet>
               <div id="articles" className="articles" >
                    <h1>Aktualności</h1>
                   <Grid>
                       <Col sm={8}>
                           {posts.map( post => {
                               const { content, image, slug, title, date } = post.attributes
                                return(
                                    <div key={slug} className="article">
                                        <Link to={`/aktualnosci/${slug}`}>
                                            <Row className="article__box">
                                                <Col md={5}>
                                                    <img src={image}/>
                                                </Col>
                                                <Col md={7}>
                                                    <div className='article__text'>
                                                        <h2>
                                                            {title}
                                                        </h2>
                                                        <span className='article__time'><Glyphicon glyph={'time'}/> Utworzono: <Moment date={date} format="LL" /></span>
                                                        <p>{content}</p>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Link>
                                    </div>
                                )
                           })}
                           {initialPage !== null && <ReactPaginate
                               disableInitialCallback={true}
                               onPageChange={(e)=>this.pageChange(e)}
                               initialPage={initialPage}
                               previousLabel=""
                               previousLinkClassName="glyphicon glyphicon-chevron-left"
                               nextLinkClassName="glyphicon glyphicon-chevron-right"
                               nextLabel=""
                               containerClassName='pagination'
                               pageCount={pageCount}
                               pageRangeDisplayed={2}
                               marginPagesDisplayed={1}/>}
                       </Col>
                       <Col sm={4}>
                           <Sidebar/>
                       </Col>
                   </Grid>
               </div>
            </React.Fragment>
        );
    }
}
export default News;