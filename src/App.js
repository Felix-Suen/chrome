import React from 'react';
import './App.css';
import Mouse from './components/mouse';

const topLeft = 'https://outlook.office.com/mail/inbox';
const topRight = 'https://github.com/Felix-Suen';
const bottomLeft = 'https://learn.uwaterloo.ca/d2l/home';
const bottomRight = 'https://mail.google.com/mail/ca/u/0/#inbox';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            daynum: this.Daynum(),
        }
    }

    Daynum() {
        var currentDate = new Date();
        var firstDate = new Date("09/21/2018");
        var time_difference = currentDate.getTime() - firstDate.getTime();
        var day_difference = Math.floor(time_difference / (1000 * 3600 * 24));
        return day_difference;
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                daynum: this.Daynum()
            })
        }, 360000)
    }

    render() {
        return (
            <div className="background">

                <Mouse days={this.state.daynum} />

                <div className="row">

                    <div className="column">
                        <a href={topLeft}>
                            <div className="invibutton"></div>
                        </a>
                    </div>

                    <div className="column">
                        <a href={bottomLeft}>
                            <div className="invibutton"></div>
                        </a>
                    </div>
                </div>

                <div className="row">

                    <div className="column">
                        <a href={topRight}>
                            <div className="invibutton"></div>
                        </a>
                    </div>
                    <div className="column">
                        <a href={bottomRight}>
                            <div className="invibutton"></div>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
