import React from 'react'
import {LineChart ,Line, XAxis, YAxis, CartesianGrid,ResponsiveContainer, Tooltip, Legend} from 'recharts'
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
      <ResponsiveContainer width="99%" aspect={3}>
      <LineChart 
        width={1800} 
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
          <XAxis 
          interval = {6}
            tick={{fontSize: 15}} 
            angle={-45} 
            stroke="#ffff44" 
            dy={20} 
            dataKey={X_AXIS_KEY} 
            label = {
                { 
                  stroke:"#fff5FF",
                  value: "TimeLine", 
                  position: "Bottom",
                  dy: 70,
                  fontSize:30,
                  fontFamily : "sans-serif",
                }
              }
            
                  fontFamily='sans-serif'
            />
          <YAxis
            interval = {0}
            stroke="#ffff44" 
            dataKey={Y_AXIS_KEY}
            dx={-20}
            domain={[0,100]}
            label={{
              stroke:"#fff5FF",
              angle: -90,
              value:"Percent",
              dx : -40,
              fontSize:25
            }}
            />
          <Legend />
          <Line
            type="monotone" 
            dataKey = {LINE_KEY}
            name="CupCake"
            fontFamily="sans-serif" 
            stroke="#0095FF" 
          />
          <Tooltip label="Line Chart"/>
        </LineChart>
        </ResponsiveContainer>
      );
    }
  
}

export default LineChartComponent;