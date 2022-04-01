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
                    className="textInput"
                />
                <br></br>
                <button type="submit"  
                    disabled={!props.value}
                    className="signInButton">
                    Search
                </button>
            </form>
        </div>
    )
}

export default Searchbar