import { useState, useEffect } from "react";
import "./App.css";
import CardList from "./components/card-list/CardList.js";
import { SearchBox } from "./components/search-box/SearchBox.js";

// API to bring the monsters
// https://jsonplaceholder.typicode.com/users

const apiUrl = "https://jsonplaceholder.typicode.com/users";
// const apiUrl = `https://pokeapi.co/api/v2/generation/generation-i`;

function App (){
  console.log('render')
  const [searchField, setSearchField]=useState('')
  const [title, setTitle] = useState('')
  const [monsters, setMonsters]=useState([]);
  // vamos a ver como usar useEffect() solo cuando cambien los monstruos filtrados
  const [stringField,setStringField]=useState('')// se crea un segundo search box para que solo renderice cuando cambien filteredmonsters
  const [filteredMonster2,setFilteredMonsters2]=useState(monsters);// valor inicial el estado de monsters

  
  

  useEffect(()=>{
    fetch(apiUrl)
    .then((response)=>response.json())
    .then((users)=>setMonsters(users));
    
  },[])
  
  
  useEffect(()=>{
    const newFilteredMonster = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });
    setFilteredMonsters2(newFilteredMonster);
      console.log('debe de cambiar solo cuando escribo en el primer searchbox')
    },[monsters,searchField])// quiero que cambie el estado filteredMonsters solo cuando cambie monsters o searchField

  const onSearchChange = (event) => {
    const searchFieldText = event.target.value.toLowerCase();
    setSearchField(searchFieldText)
  }; 

  const onStringChange= (event) => {
    setStringField(event.target.value.toLowerCase())
  }; 


  const onTitleChange= (event) => {
    const typeField=event.target.value.toLowerCase()
    setTitle(typeField)
  };
  
  const filteredMonster = monsters.filter((monster) => {
    return monster.name.toLowerCase().includes(searchField);
  });



  return(
    <div className="App">
         <h1 className="app-title">Monster´s Rolodex </h1>
         <h3 className="app-title">{title}</h3>
         <h4>Search a Monster</h4>
         <SearchBox onChanceHandler={onSearchChange} placeholder="Search Monster" className="monsters-search-box"/>
         {/* Este search box es para mostrar el usar un useEffect y que solo se renderice cuando cambian ciertas cosas */}
         <h4>useEffect example</h4>
         <SearchBox onChanceHandler={onStringChange} placeholder="My field text" className="monsters-search-box"/>
         <h4>Modify a title</h4>
         <SearchBox onChanceHandler={onTitleChange} placeholder="Change the title" className="monsters-search-box"/>

       
         <CardList
           filteredMonster={filteredMonster}
         /> 

       </div>

  )



}
export default App;


