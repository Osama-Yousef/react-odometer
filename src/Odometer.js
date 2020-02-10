import React from 'react';

class Odometer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            speed: 0,
        }
    }
    //
    // TODO: DRY this all out ...
    //
    decrement_1() {
        let newValue = this.state.speed - 1
        if (newValue < 0) {
            newValue = 0;
        }
        this.setState({
            speed: newValue
        })
    }

    decrement_10() {
        let newValue = this.state.speed - 10
        if (newValue < 0) {
            newValue = 0;
        }
        this.setState({
            speed: newValue
        })
    }

    decrement_100() {
        let newValue = this.state.speed - 100
        if (newValue < 0) {
            newValue = 0;
        }
        this.setState({
            speed: newValue
        })
    }

    decrement_1000() {
        let newValue = this.state.speed - 1000
        if (newValue < 0) {
            newValue = 0;
        }
        this.setState({
            speed: newValue
        })
    }

    increment_1() {
        const newValue = (this.state.speed + 1) % 10000
        this.setState({
            speed: newValue
        })
    }

    increment_10() {
        const newValue = (this.state.speed + 10) % 10000
        this.setState({
            speed: newValue
        })
    }

    increment_100() {
        const newValue = (this.state.speed + 100) % 10000
        this.setState({
            speed: newValue
        })
    }

    increment_1000() {
        const newValue = (this.state.speed + 1000) % 10000
        this.setState({
            speed: newValue
        })
    }

    pad_value() {
        return ("0000" + this.state.speed).slice(-4)
    }

    render () {
        return (
            <>
            <p>{this.pad_value()}</p>

            <button onClick={() => this.decrement_1000()}>-1000</button>
            <button onClick={() => this.decrement_100()}>-100</button>
            <button onClick={() => this.decrement_10()}>-10</button>
            <button onClick={() => this.decrement_1()}>-1</button>
            <button onClick={() => this.increment_1()}>+1</button>
            <button onClick={() => this.increment_10()}>+10</button>
            <button onClick={() => this.increment_100()}>+100</button>
            <button onClick={() => this.increment_1000()}>+1000</button>
            </>
        )
    }
}

export default Odometer;
