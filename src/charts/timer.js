import React from 'react'

class CountDownTimer extends React.Component{
    state = {
        seconds : 300
    }

    callBackfunc(){
        if(this.state.seconds === 0){
            this.setState({seconds:300})
        }

        else{
            this.setState({seconds:this.state.seconds - 1 })
        }
    }

    componentDidMount(){
        setInterval(() => this.callBackfunc(),1000)
    }

    componentWillMount(){
        clearInterval(this.interval)
    }

    render(){
        return (
            <div>
                <h4 className="countdown-timer">Refreshes in {this.state.seconds} seconds</h4>
            </div>
        )
    }
}

export default CountDownTimer;