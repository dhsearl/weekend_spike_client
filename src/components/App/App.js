import React, { Component } from 'react';
import {connect} from 'react-redux';
import Poll from '../Poll/Poll';
import Input from '../Input/Input';
import { HashRouter as Router, Route, Switch, withRouter } from 'react-router-dom'
import './App.css';
import crypto from 'crypto'

class App extends Component {

    componentWillMount(){
        if (localStorage.id){
            this.props.dispatch({type:"SET_ID", payload: localStorage.id})
        } else {
            const id =crypto.randomBytes(20).toString('hex')
            localStorage.setItem('id', id )
            this.props.dispatch({type:"SET_ID", payload: localStorage.id})
        }
    }

    render() {
        return (
            <>
            <Router>
            <Switch>
                <Route path="/" exact component={Input} />
                <Route path="/:route" component={Poll} />
            </Switch>
            </Router>

              <pre>{JSON.stringify(this.props,null,2)}</pre>
              </>
        );
    }
}
const mapReduxStateToProps = (reduxState) => {
    return reduxState
}
export default connect(mapReduxStateToProps)(App);

