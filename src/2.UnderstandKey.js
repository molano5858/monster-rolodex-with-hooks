import { Component } from "react"; // we shoul import this to write components with Class Syntax
import "./App.css";

class App2 extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        {
          name: "Dante",
          id: "1",
        },
        {
          name: "Terry",
          id: "2",
        },
        {
          name: "Jade",
          id: "3",
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {
          return <h1 key={monster.id}>{monster.name}</h1>;
        })}
      </div>
    );
  }
}

export default App2;
