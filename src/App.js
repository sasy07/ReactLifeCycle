import { Component } from "react";

import "./App.css";

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
  }
  static getDerivedStateFromProps(props, state) {
    console.log("App.js - getDrivedStateFromProps()");
    return state;
  }
  componentDidMount() {
    console.log("App.js - componentDidMount()");
    this.timer = setInterval(() => this.tick(), 1000);
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

  render() {
    console.log("App.js - render()");
    return (
      <div className="App">
        <p>سلام دوستان عزیز</p>
        <p>ساعت الان : {this.state.date.toLocaleTimeString()}</p>
      </div>
    );
  }
}

export default App;
