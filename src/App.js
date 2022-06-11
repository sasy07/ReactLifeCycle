import { Component } from "react";

import "./App.css";
import SecondClock from "./components/SecondClock";

/*
 * // NOTE Mounting LifeCycle In Class Components
 * - 1) constructor()
 * - 2) static getDerivedStateFromProps(props, state)
 * - 3) render()
 * - 4) componentDidMount()
 */

class App extends Component {
  constructor() {
    super();
    console.log("App.js - constructor()");
    this.state = {
      date: new Date(),
      showClock: true,
      color: false,
    };
    this.colorChange = this.colorChange.bind(this);
    this.clockChange = this.clockChange.bind(this);
  }
  static getDerivedStateFromProps(props, state) {
    console.log("App.js - getDrivedStateFromProps()");
    return state;
  }
  componentDidMount() {
    console.log("App.js - componentDidMount()");
   // this.timer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    console.log("App.js - componentWillUnmount()");
    clearInterval(this.timer);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }
  clockChange() {
    this.setState({ showClock: !this.state.showClock });
  }
  colorChange() {
    this.setState({ color: !this.state.color });
  }
  render() {
    const { date, showClock, color } = this.state;
    console.log("App.js - render()");
    return (
      <div className="App">
        <p>سلام دوستان عزیز</p>
        {showClock ? <SecondClock color = {color} date={date} /> : null}
        <hr />
        <button onClick={this.clockChange}>نمایش ساعت</button>
        <button onClick={this.colorChange}>تغییر رنگ</button>
      </div>
    );
  }
}

export default App;
