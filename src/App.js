import React from 'react';
import './App.css';
import Mouse from './components/mouse';

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
                        <a href="https://owl.uwo.ca/portal">
                            <div className="invibutton"></div>
                        </a>
                    </div>

                    <div className="column">
                        <a href="https://outlook.office.com/mail/inbox">
                            <div className="invibutton"></div>
                        </a>
                    </div>
                </div>

                <div className="row">

                    <div className="column">
                        <a href="https://drive.google.com/drive/u/0/my-drive">
                            <div className="invibutton"></div>
                        </a>
                    </div>
                    <div className="column">
                        <a href="https://mail.google.com/mail/ca/u/0/#inbox">
                            <div className="invibutton"></div>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
