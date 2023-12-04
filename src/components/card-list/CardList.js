import React, { Component } from "react";
import Card from '../Card/Card'
import './card-list.css'

class CardList extends Component {
  render() {
    const { filteredMonster } = this.props;
    return (
      <Card filteredMonster={filteredMonster}/>
    );
  }
}

export default CardList;
