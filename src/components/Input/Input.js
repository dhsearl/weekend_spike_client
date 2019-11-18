import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

class Input extends Component {
    handleInput = (e) =>{
        this.props.dispatch({type:'ROUTE_INPUT', payload: e.target.value})
    }
    handleSubmit = (e)=>{
        e.preventDefault();
        this.props.dispatch({type:'ADD_ROUTE', payload: this.props})

    }

    render() {
        return (
            <>
            <div className="centered">
                <form onSubmit={this.handleSubmit}>

                <input type="text" 
                className="inputDarkMode"
                value={this.props.newRouteInput} 
                onChange={this.handleInput} />
                
                </form>
              {/* <pre>{JSON.stringify(this.props,null,2)}</pre> */}
              
                
            </div>
              
              </>
        );
    }
}
const mapReduxStateToProps = (reduxState) => {
    return reduxState
}
export default withRouter(connect(mapReduxStateToProps)(Input));

