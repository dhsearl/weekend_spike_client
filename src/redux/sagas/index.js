import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
const serverUrl = 'https://weekend-spike-server.herokuapp.com'

function* fetchInformationSaga(action){
    try {
        const status = yield axios.get(`${serverUrl}/api/route/${action.payload.url}`);
        yield put({type:"SET_STATUS",payload: status});
    } catch (error) {
        console.log('ERROR in pollInformation Saga', error);
    }
}

function* wakeUpHeroku(){
    try{
        yield axios.get(`${serverUrl}/thing1`)
    } catch (e) {
        console.log('Heroku Wakup Failed', e);
        
    }
}

function* addRouteSaga(action) {
    try {
        
        yield axios.post(`${serverUrl}/api/route`,action.payload);
        yield put({type:'CLEAR_INPUT'});
        
        const route = action.payload.newRouteInput;
        console.log(route);

        const { history } = action.payload;
        yield history.push(`/${route}`);

    } catch (error) {
        console.log('routeSaga ERROR', error);
        
    }
}


function* rootSaga() {
    yield takeEvery('ADD_ROUTE', addRouteSaga);
    yield takeEvery('FETCH_STATUS', fetchInformationSaga);
    yield takeEvery('WAKE_HEROKU', wakeUpHeroku);
  }
  
  export default rootSaga;