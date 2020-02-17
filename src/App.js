import React from 'react';
import './App.css';
import Mouse from './components/mouse';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      daynum: this.Daynum() + ' Days',
    }
  }

  Daynum() {
    var currentDate = new Date();
    var firstDate = new Date("09/21/2018");
    var time_difference = currentDate.getTime() - firstDate.getTime();
    var day_difference = Math.floor(time_difference / (1000 * 3600 * 24));
    return day_difference;
  }

  current() {
    var currentDate = new Date();
    return currentDate;
  }

  componentDidMount() {
    setInterval( () => {
      this.setState({
        daynum : this.Daynum()
      })
    },360000)
  }

  render() {
    return(
      <div className="background">

      <Mouse days={this.state.daynum}/>

        <div className="row">
          <div className="column">
            <a href="https://www.google.com"><div className="invibutton"></div></a>
          </div>
          <div className="column">
            <a href="https://www.youtube.com"><div className="invibutton"></div></a>
          </div>
        </div>

        <div className="row">
          <div className="column">
            <a href="https://www.messenger.com"><div className="invibutton"></div></a>
          </div>
          <div className="column">
            <a href="https://www.gmail.com"><div className="invibutton"></div></a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
