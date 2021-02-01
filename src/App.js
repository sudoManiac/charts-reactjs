import logo from './logo.svg';
import './App.css';
import React, { useState , useEffect} from 'react';

import CountDownTimer from './charts/timer'
import LineChartComponent from './charts/linechart'
import BarChartComponent from './charts/barchart'
import { MTL_API_ENDPOINT } from './constants';

// TODO: ADD A refresh when data updates to chart using setState() or updateState()


const apiURL = MTL_API_ENDPOINT;


function App() {

  const [apiData, setData] = useState({});

  useEffect(() => {
    apiWithFetch();
  }, []);
  

  const apiWithFetch = async () => {
    const response = await fetch(apiURL);
    const jsonData = await response.json();
    setData(jsonData)
}; 

// console.log(apiData);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <div className="line-chart">
          <LineChartComponent  data ={apiData}/>
        </div>
      <CountDownTimer />
      <div className="bar-chart">
        <BarChartComponent data ={apiData}/>
      </div>
      
      </header>
    </div>
  );
}

export default App;
