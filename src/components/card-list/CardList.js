import React from "react";
import Card from '../Card/Card'
import './card-list.css'

function CardList({filteredMonster}){
  return(
    <div className="card-list">
      {filteredMonster.map((monster)=>(
       <Card key={monster.id} monster={monster}/>
      ))}
    </div>
  )
}

export default CardList;
