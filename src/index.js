import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Amplify } from 'aws-amplify';
 
Amplify.configure({
  Auth: {
    // REQUIRED - Amazon Cognito Region
    region: 'ap-northeast-1',
    // OPTIONAL - Amazon Cognito User Pool ID
    userPoolId: 'ap-northeast-1_2VU9jlkYR',
    // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
    userPoolWebClientId: '34ule3i5ekhi8sa8ijm03trcrt'
  }
});
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
