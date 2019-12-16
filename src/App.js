import React from 'react';
import './App.css';
import Sky from 'react-sky';

class App extends React.Component {
  constructor (props) {
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
        <Sky
          images={{
              0: "https://cdn2.iconfinder.com/data/icons/food-drink-60/50/1F954-potato-512.png",
              1: "https://cdn2.iconfinder.com/data/icons/colored-fast-food-1/512/fast_food-26-512.png",
              2: "https://cdn.iconscout.com/icon/premium/png-256-thumb/papaya-50-911411.png"}}
          how={70}
          time={20}
          size={'100px'}
          background={'#035973'}
        />
        <h1 className="day">{this.state.daynum} Days</h1>
      </div>
    );
  }
}

export default App;
