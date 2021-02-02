import React from 'react'
import {LineChart ,Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'
import { MTL_API_ENDPOINT , LINE_KEY, X_AXIS_KEY, Y_AXIS_KEY} from '../constants';

class LineChartComponent extends React.Component{

  state = {
    apiData: [
      {
          "id": "16",
          "month": "May 2005",
          "percent": 7,
          "update_time": "2021-02-02 10:07:00.590097428 +0000 UTC m=+427.925701055"
      },
      {
          "id": "193",
          "month": "Feb 2020",
          "percent": 51,
          "update_time": "2021-02-02 10:07:11.747889263 +0000 UTC m=+439.083492891"
      },
      {
          "id": "106",
          "month": "Nov 2012",
          "percent": 87,
          "update_time": "2021-02-02 10:07:11.751973705 +0000 UTC m=+439.087577331"
      },
    ]
  }

 // callback function running every 10 seconds
  fetchData = () => {
    fetch(MTL_API_ENDPOINT)
    .then((response)=> response.json())
    .then(fetchedData => {
      console.log(fetchedData['fetched_data'])
      this.setState({apiData: fetchedData['fetched_data']})
    });
  }
  
  componentDidMount() {
    // need to make the initial call to getData() to populate
    // data right away
    // Now we need to make it run at a specified interval
    setInterval(this.fetchData , 300000); // runs every 60 seconds.
  }

  componentWillUnmount() {
    clearInterval(this.interval );
  }


  render(){

    return (
      <LineChart 
        width={1500} 
        height={600} 
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
          <XAxis tick={false} stroke="#ffff44" dataKey={X_AXIS_KEY} fontFamily="sans-serif"  />
          <YAxis stroke="#ffff44" dataKey={Y_AXIS_KEY}/>
          <Legend />
          <Line 
          type="monotone" 
          dataKey = {LINE_KEY}
          fontFamily="sans-serif" stroke="#0095FF" />
          <Tooltip label="Line Chart"/>
        </LineChart>
      );
    }
  
}

export default LineChartComponent;