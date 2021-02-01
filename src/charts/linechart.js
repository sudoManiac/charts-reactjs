import React from 'react'
import {LineChart ,Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'
import { MTL_API_ENDPOINT } from '../constants';

class LineChartComponent extends React.Component{

  state = {
    apiData: [
      {"count":40},
      {"count":5}
    ],
  }

 // callback function running every 10 seconds
  fetchData = () => {
    fetch(MTL_API_ENDPOINT)
    .then((response)=> response.json())
    .then(fetchedData => {
      console.log(fetchedData)
      this.setState({apiData: fetchedData})
      
    });
  }

  componentDidMount() {
    // need to make the initial call to getData() to populate
    // data right away
    // Now we need to make it run at a specified interval
    setInterval(this.fetchData , 10000); // runs every 5 seconds.
  }

  componentWillUnmount() {
    clearInterval(this.interval );
  }


  render(){
    return (
      <LineChart 
        width={1200} 
        height={400} 
        data={this.state.apiData}
        
        margin={
           {  
              top: 25,
              right: 40,
              bottom: 50,
              left: 40 
            }
          }>
          <CartesianGrid stroke="#eee" fontFamily="sans-serif" strokeDasharray="5 5" />
          <XAxis stroke="#ffff44" label="CupCake Name" dataKey="month" fontFamily="sans-serif" />
          <YAxis stroke="#ffff44" dataKey="count"/>
          <Legend />
          <Line 
          type="monotone" 
          dataKey="count" 
          fontFamily="sans-serif" stroke="#0095FF" />
          <Tooltip label="Line Chart"/>
        </LineChart>
      );
    }
  
}

export default LineChartComponent;