import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';
import configureStore from './redux/store/store';
import {Provider} from 'react-redux';
import {checkForUser} from './redux/actions/userAction';


export const store = configureStore();
store.dispatch(checkForUser());

const WithRouter = () => (
  
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>

);


ReactDOM.render(<WithRouter/>, document.getElementById('root'));
registerServiceWorker();
