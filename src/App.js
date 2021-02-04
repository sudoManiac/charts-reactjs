import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

import CountDownTimer from './charts/timer'
import LineChartComponent from './charts/linechart'
// import BarChartComponent from './charts/barchart'
import { API_RESPONSE_DATA_KEY, MTL_API_ENDPOINT } from './constants';

// TODO: ADD A refresh when data updates to chart using setState() or updateState()


function App() {
  return (
    <div className="App">
      <header className="App-header">
        Hosted on AWS
        </header>
      <body>
      
        <div className="timer">
          <CountDownTimer />
        </div>
        <div className="line-chart">
          <LineChartComponent />
        </div>
      <div className="chart-info">
          Google Search Trend For "CupCake"
        </div>
      </body>

      <footer className="App-footer">
        <div className="footer-text">
          Made In React JS
        </div>
        <img src={logo} className="App-logo" alt="logo" />
      </footer>
      {/* <div className="bar-chart">
        <BarChartComponent data ={apiData}/>
      </div> */}

    </div>
  );
}

export default App;
