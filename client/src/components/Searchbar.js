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
            onChange={props.onChange}
            />
            <button type="submit" disabled={!props.value}>Search</button>
            </form>
        </div>
    )
}

export default Searchbar