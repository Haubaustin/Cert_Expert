import React from "react";
import Searchbar from "./Searchbar";

const MainSearch = () => {
    return (
        <div className="Main">
            <div className="search">
                <h3>Search</h3>
                <div className="searchFilters">
                    <Searchbar />
                </div>
            </div>
            <div className="results">
                
            </div>
        </div>
    )
}

export default MainSearch