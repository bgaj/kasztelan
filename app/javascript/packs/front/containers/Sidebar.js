import React from "react";
import { Link } from 'react-router-dom';
import {Glyphicon} from 'react-bootstrap';
import {connect} from "react-redux";
import MatchBox from '../components/MatchBox'

class Sidebar extends React.Component {
    render() {
        const { next, prev} = this.props
        return (
            <React.Fragment>
                {next.data && <MatchBox title="Następny mecz" match={next.data.attributes}/>}
                {prev.data && <MatchBox title="Poprzedni mecz" match={prev.data.attributes}/>}

                <a className='social social__facebook' href="https://www.facebook.com/kasztelanrozprza" target="_blank">
                    <div className="social__icon social__icon--facebook">f</div>
                    <div className="social__text">
                        Polub nasz profil
                        <span className='circle'>
                                        <Glyphicon glyph='plus' />
                                    </span>
                    </div>
                </a>
                <Link to='/terminarz' className='social social__green'>
                    <div className="social__icon social__icon--green">f</div>
                    <div className="social__text">
                        Sprawdź terminarz
                        <span className='circle'>
                                        <Glyphicon glyph='plus' />
                                    </span>
                    </div>
                </Link>
                <Link to='/tabela' className='social social__black'>
                    <div className="social__icon social__icon--black">f</div>
                    <div className="social__text">
                        Sprawdź tabelę
                        <span className='circle'>
                                        <Glyphicon glyph='plus' />
                                    </span>
                    </div>
                </Link>
            </React.Fragment>
        );
    }
}
export default connect(
    state => ({
        prev: state.prev,
        next: state.next
    }),
    {}
)(Sidebar)