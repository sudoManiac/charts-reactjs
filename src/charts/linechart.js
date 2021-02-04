import React from 'react'
import {LineChart ,Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'
import { MTL_API_ENDPOINT , LINE_KEY, X_AXIS_KEY, Y_AXIS_KEY, API_RESPONSE_DATA_KEY ,REFRESH_RATE} from '../constants';

class LineChartComponent extends React.Component{

  state = {
    apiData : null
  }

 // callback function running every 10 seconds
  fetchData = () => {
    fetch(MTL_API_ENDPOINT)
    .then((response)=> response.json())
    .then(fetchedData => {
      console.log(fetchedData[API_RESPONSE_DATA_KEY])
      this.setState({apiData: fetchedData[API_RESPONSE_DATA_KEY]})
    });
  }
  
  async componentDidMount() {
    // need to make the initial call to getData() to populate
    // data right away
    const response = await fetch(MTL_API_ENDPOINT);
    const jsonData = await response.json();
    console.log(jsonData[API_RESPONSE_DATA_KEY])
    this.setState({ apiData: jsonData[API_RESPONSE_DATA_KEY]})

    // Now we need to make it run at a specified interval
    setInterval(this.fetchData , REFRESH_RATE ); // runs every 60 seconds.
  }


  componentWillUnmount() {
    clearInterval(this.interval );
  }


  render(){
    
    return (
      
      <LineChart 
        width={1800} 
        height={600} 
        align="center"
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
          <XAxis tick={{fontSize: 15}} angle={-45} stroke="#ffff44" dataKey={X_AXIS_KEY} fontFamily='sans-serif'   />
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