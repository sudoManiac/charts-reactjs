import React from 'react';
import { Bar, BarChart, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { MTL_API_ENDPOINT } from '../constants';

class BarChartComponent extends React.Component {


  state = {
    apiData: [
      { "count": 40 },
      { "count": 5 }
    ],
  }

  // callback function running every 10 seconds
  fetchData = () => {
    fetch(MTL_API_ENDPOINT)
      .then((response) => response.json())
      .then(fetchedData => {
        console.log(fetchedData)
        this.setState({ apiData: fetchedData })

      });
  }

  componentDidMount() {
    // need to make the initial call to getData() to populate
    // data right away
    // Now we need to make it run at a specified interval
    setInterval(this.fetchData, 10000); // runs every 5 seconds.
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }


  render() {
    return (
      <BarChart
        width={1200}
        height={400}
        data={this.state.apiData}
        margin={{ top: 25, right: 20, left: 20, bottom: 50 }}
      >
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <XAxis stroke="#ffff44" dataKey="id" fontFamily="sans-serif" />
        <YAxis stroke="#ffff44" dataKey="count" fontFamily="sans-serif" />
        <Bar
          dataKey="count"
          barSize={10}
          fontFamily="sans-serif"
          label="cupcake"
          fill="#33343"
          stroke="#0095FF"
        >
        </Bar>
        <Tooltip />
      </BarChart>
    )
  }
}

export default BarChartComponent;
