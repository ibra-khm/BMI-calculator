import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Header from './Header';
import Box from './Box';
import Bmi from './Bmi';
import Footer from './Footer';
// import NewComp from './NewComp';
// import Counter from './Counter';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
// console.log('Render1')

root.render(
    <>
    <Header />
    <Bmi />
    <Box />
    <Footer />
    </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
