import React from "react";

function Search({ searched, setSearched }) {

  function handleChange(e){
    setSearched(e.target.value)
  }

  return (
    <div className="ui search" >
      <div className="ui icon input">
        <input className="prompt" value={searched} onChange={handleChange}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
