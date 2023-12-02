import React from "react";
import "./search-box.css"

function SearchBox(props){
    return(
        <input
          className={`search-box ${props.className}`}
          placeholder={props.placeholder}
          type="search"
          onChange={props.onChanceHandler}
        />
    )
}

export{SearchBox}