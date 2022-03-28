import React from "react";

const Searchbar = (props) => {

    return (
        <div className="SearchBar">
            <form onSubmit={props.onSubmit}>
            <input 
            id="name" 
            type={"text"} 
            placeholder="Name of Certificate" 
            value={props.value}
            onChange={props.onChange1}
            />
            <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default Searchbar