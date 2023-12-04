import { useState } from "react";
import "./App.css";
import MyClassComponent from "./3.classComponentPractice.js";
import CardList from "./components/card-list/CardList.js";
import { SearchBox } from "./components/search-box/SearchBox.js";

// API to bring the monsters
// https://jsonplaceholder.typicode.com/users

const apiUrl = "https://jsonplaceholder.typicode.com/users";
// const apiUrl = `https://pokeapi.co/api/v2/generation/generation-i`;

function App (){
  return(
    <div>
    <h1>Hooks</h1>
    <h1>This is the project with hooks</h1>
    </div>
  )



}

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }

//   componentDidMount() {
//     // Mounting is the first time a componente get placed into DOM, esto solo pasa una vez en el ciclo de vida
//     fetch(apiUrl)
//       .then((response)=>response.json())
//       .then((users)=>this.setState(()=>{return {monsters:users}}));
//   }

//   // async componentDidMount() {
//   //   const response = await fetch(apiUrl);
//   //   const data = await response.json();
//   //   this.setState(
//   //     () => {
//   //       return { monsters: data.pokemon_species };
//   //     },
//   //     () => {
//   //       console.log(this.state);
//   //     }
//   //   );
//   // }

 

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLowerCase();
//     this.setState(() => {
//       return { searchField: searchField }; // this could be just searchField if the key and variable are the same
//     });
//   }; // esta funcion onSearchChange estaba abajo en el onchage del input, la sacamos para optimizar ya que estando aca afuera
//   // solo se creara esta function una vez, mientras que si se deja alla se va a montar cada vez que render renderice

//   render() {
//     console.log("App render");
//     // para no escribir siempre this.state podemos desestructurar
//     const { monsters, searchField } = this.state;
//     // para optimizar podemos desestructurar onSearchChange
//     const { onSearchChange } = this;

//     // una buena practica es no modificar la lista original cuando se filtra, por eso se crea una variable accesible en todo
//     // hay problema, cuando escribo me filtra pero cuando borro no me vuelve a filtrar en los ant
//     const filteredMonster = monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(searchField);
//     });
//     return (
//       <div className="App">
//         <h1 className="app-title">Monster´s Rolodex </h1>
//         <SearchBox onChanceHandler={onSearchChange} placeholder="Search Monster" className="monsters-search-box"/>
//         {/* 
//         esta funcionalidad es puesta en el componente CardList 
//         {filteredMonster.map((monster) => {
//           return <h1 key={monster.id}>{monster.name}</h1>;
//         })} */}

       
//         <CardList
//           filteredMonster={filteredMonster}
//           miProp={"Hola bebe que mas pues"}
//         /> 

//         {/* <MyClassComponent /> */}
//       </div>
//     );
//   }
// }

export default App;
