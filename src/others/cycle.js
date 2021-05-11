import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';

class Seconds extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            color: 'red'
        };
    }

    static getDerivedStateFromProps(props, state) {
        if (props.counter % 2) {
            return {
                color: 'blue',
            }
        }

        return {
            color: 'green',
        }
    }

    render() {
        return (
            <div className="seconds">{ this.props.counter } { this.state.color }секунд</div>
        )
    }
}

class Minutes extends React.Component {
    render() {
        return (
            <div className="minutes">{ this.props.counter } минут</div>
        )
    }
}

class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            seconds: 0,
            minutes: 0,
        };
    }

    componentDidMount() {
        this.intervalCounter = setInterval(() => {
            this.setState((state) => {
                return {
                    seconds: state.seconds + 1,
                }
            });
        }, 1000);
    }

    static getDerivedStateFromProps(props, state) {
        if (state.seconds % 3) {
            return {
                minutes: parseInt(state.seconds / 3),
            }
        }
        return state;
    }

    componentWillUnmount() {
        clearInterval(this.intervalCounter);
    }

    render() {
        return (
            <div className="center">
                <Minutes counter={ this.state.minutes } />
                <Seconds counter={ this.state.seconds } />
            </div>
        )
    }
}

ReactDOM.render(
    <Counter />,
    document.getElementById('root')
);