import React, { Component } from "react";

class CardList extends Component {
  render() {
    console.log("Card");
    console.log(this.props.filteredMonster)
    const { filteredMonster } = this.props;
    return (
      <div>
        {filteredMonster.map((monster) => {
          return <h1 key={monster.id}>{monster.name}</h1>;
        })}
      </div>
    );
  }
}

export default CardList;
