import React, { Component } from "react";
import './card.css'

class Card extends Component{
      
    render(){
        const { filteredMonster } = this.props;
        return (<div className="card-list">
        {filteredMonster.map((monster) => {
          const {id, name, email}=monster
          return (<div className="card-container">
            <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2`}></img>
           <h2>{name}</h2>
           <p>{email}</p>
          </div>)
            
        })}
      </div>)
    }
}

export default Card;
