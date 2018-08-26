import React from "react";
import Moment from 'react-moment';

class Loader extends React.Component {
    showResult = (result) => {
        if(!result) return '-:-'
        let home_set = 0
        let guest_set = 0
        result.split(',').map( set => {
            const set_data = set.split(':')
            if(parseInt(set_data[0]) > parseInt(set_data[1])){
                home_set += 1
            }
            else{
                guest_set += 1
            }
        })
        return `${home_set}:${guest_set}`
    }
    render() {
        const { match_type, home_logo, guest_logo, result, home, guest, match_date, match_time} = this.props.match
        return (
            <React.Fragment>
                <div className='box'>
                    <div className='box__title'>
                        <h4>{this.props.title}</h4>
                    </div>
                    <div className='match'>
                        <div className='match__title'>{match_type}</div>
                        <div className='match__date'><Moment date={match_date} format="LL"/>{match_time && <span> - <Moment date={match_time} format="LT"/></span>}</div>
                        <div className='match__details'>
                            <div className='match__team'>
                                <img src={home_logo} />
                                <span>{home}</span>
                            </div>
                            <div className='match__score'>{this.showResult(result)}</div>
                            <div className='match__team'>
                                <img src={guest_logo} />
                                <span>{guest}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default Loader;