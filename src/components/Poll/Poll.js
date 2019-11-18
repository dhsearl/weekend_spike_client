import React, { Component } from 'react';
import { connect } from 'react-redux';
// import moment from 'moment';
import Countdown from '../Countdown/Countdown';
import IntervalRenderer from 'react-interval-renderer';
import Minutes from '../Minutes/Minutes'



class Poll extends Component {
    handleShouldRerenderChild() {
        console.log('Called shouldComponentRerender');
        return true;
    }

    handleChildDidRerender() {
        console.log('Called componentDidRerender');
    }
    componentDidMount() {
        this.props.dispatch({
            type: 'FETCH_STATUS',
            payload: { url: this.props.match.params.route }
        })

    }
    render() {
        const poll_name = this.props.match.params.route;
        return (
            <>
                <div>
                    <Countdown time={this.props.pollStatus.created_at}/>
                    <h1>I'm a poll</h1>
                    <h3>{poll_name}</h3>    
                    <IntervalRenderer
                interval={500}
                shouldComponentRerender={this.handleShouldRerenderChild}
                componentDidRerender={this.handleChildDidRerender}
            >
                <Minutes route = {this.props.match.params.route}/>
            </IntervalRenderer>
                </div>
            </>
        );
    }
}
const mapReduxStateToProps = (reduxState) => {
    return reduxState
}
export default connect(mapReduxStateToProps)(Poll);

