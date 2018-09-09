import React from "react";
import {Grid, Col, Row} from 'react-bootstrap';
import Sidebar from "../containers/Sidebar";
import {Helmet} from "react-helmet";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import api from '../api'

const MapWithAMarker = withScriptjs(withGoogleMap(props =>
    <GoogleMap
        defaultZoom={15}
        defaultCenter={{ lat: 51.3040233, lng: 19.6440111 }}
    >
        <Marker
            position={{ lat: 51.3040233, lng: 19.6440111 }}
        />
    </GoogleMap>
));

class Club extends React.Component {

    state={
        email: '',
        subject: '',
        message: '',
        errors: {},
        sended: false
    }
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    sendMessage = () => {
        const {email, message, subject} = this.state
        api.contactForm({email, message, subject}).then( resp => {
            this.setState({sended: true, errors: {}})
        }).catch( e => {
            this.setState({errors: e.response.data.errors})
        })
    }

    render() {
        const {email, message, subject, errors, sended} = this.state
        return (
            <React.Fragment>
                <Helmet>
                    <title>Kasztelan Rozprza</title>
                    <meta name="description" content="Wszystkie najważniejsze informacje na temat klubu w jednym miejscu" />
                </Helmet>

                <div className='content'>
                    <h1>Kontakt</h1>
                    <Grid>
                        <Row>
                            <Col xs={12} sm={8}>
                                <div className="box">
                                    <div className="box__title">
                                        <h2 className="contact__title">Formularz kontaktowy</h2>
                                    </div>
                                    <div className="contact__form">
                                        {sended ?
                                            <div className="contact__ok">
                                                <p>Wiadomość została wysłana.</p>
                                            </div>
                                            :
                                            <div>
                                                <div>
                                                    <label>*Adres e-mail</label>
                                                    <input type="email" onChange={(e) => this.handleChange(e)} name="email" value={email} required={true} placeholder="Adres e-mail..."/>
                                                    {errors.email && <span className="contact__error">{errors.email[0]}</span>}
                                                </div>
                                                <div>
                                                    <label>Temat</label>
                                                    <input type="text" onChange={(e) => this.handleChange(e)} name="subject" value={subject} placeholder="Temat wiadomości..."/>
                                                </div>
                                                <div>
                                                    <label>*Wiadomość</label>
                                                    <textarea rows={5} onChange={(e) => this.handleChange(e)} name="message" value={message} placeholder="Wiadomość..." required={true}/>
                                                    {errors.message && <span className="contact__error">{errors.message[0]}</span>}
                                                </div>
                                                <button disabled={email && message ? false : true} onClick={()=>this.sendMessage()}>Wyślij</button>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} sm={4}>
                                <Sidebar/>
                            </Col>
                        </Row>
                    </Grid>
                </div>
                <MapWithAMarker
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDgQ63Nq0mdmslDPJiSBOyVJ9DAvdNiHJ0"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `400px` , marginBottom: '-40px', marginTop: '30px'}} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            </React.Fragment>
        );
    }
}
export default Club;