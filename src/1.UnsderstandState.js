import { Component } from "react"; // we shoul import this to write components with Class Syntax
import logo from "./logo.svg";
import "./App.css";

class App2 extends Component {
  constructor() {
    super();
    this.state = {
      name: "Felipe",
      company: "Google",
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi {this.state.name}, I work at {this.state.company}
          </p>
          <button
            onClick={() => {
              // INICIO
              // entendiendo como cambia el estado, en el siguiente codigo me imprime aun felipe
              // this.setState({ name: "Matias", company: "Amazon" });
              // console.log(this.state);// aqui imprime felipe, y es por el shallow merge
              // para que funcione debemos hacer un callback, es decir que la segunda funcion de parametro de setState se
              // ejecute solo cuando la primera se a ejecutado, ya que setState es asincrono y por eso no me mustra matias
              this.setState(
                () => {
                  return { name: "Matias", company: "Amazon" };
                },
                () => {
                  console.log(this.state);
                }
              );
              // FIN
            }}
          >
            Change a Matias
          </button>
          <button
            onClick={() => {
              // INICIO
              // entendiendo como cambia el estado, en el siguiente codigo me imprime aun felipe
              // this.setState({ name: "Matias", company: "Amazon" });
              // console.log(this.state);// aqui imprime felipe, y es por el shallow merge
              // para que funcione debemos hacer un callback, es decir que la segunda funcion de parametro de setState se
              // ejecute solo cuando la primera se a ejecutado, ya que setState es asincrono y por eso no me mustra matias
              this.setState(
                () => {
                  return { name: "Felipe", company: "Google" };
                },
                () => {
                  console.log(this.state);
                }
              );
              // FIN
            }}
          >
            Change a Felipe
          </button>
        </header>
      </div>
    );
  }
}

export default App2;
