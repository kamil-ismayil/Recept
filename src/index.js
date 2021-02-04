import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import LoginContextProvider from './Context/login-context';
import ReadJsonContextProvider from './Context/readJson-context';

ReactDOM.render(
    <LoginContextProvider>
        <ReadJsonContextProvider>
            <App/>
        </ReadJsonContextProvider>
    </LoginContextProvider>,
    document.getElementById('root'));
registerServiceWorker();
