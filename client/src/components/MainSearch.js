import React, { useState } from "react";
import Searchbar from "./Searchbar";
import axios from "axios"
import Dropdown from "./Dropdown";
import { use } from "express/lib/application";
import { query } from "express";

const MainSearch = () => {
    const [searchName, setSearchName] = useState([])
    const [nameResults, setNameResults] = useState([])
    const [searchOrg, setOrgName] = useState('')
    const [orgResults, setOrgResults] = useState('')

    const handleOrgChange = (e) => {
        setOrgName(e.target.value)
        console.log(e.target.value)
    }

    const handleNameChange = (e) => {
        setSearchName(e.target.value)
        console.log(e.target.value)
        queryByOrg()
    }

    const queryByName = async (e) => {
        e.preventDefault()
        const name = await axios.get(`http://localhost:3001/api/name/${searchName}`)
        setNameResults(name.data)
        console.log(name)
        console.log(searchName)
    }

    const queryByOrg = async (e) => {
        const org = await axios.get(`http://localhost:3001/api/${searchOrg}`)
        console.log(org.data)

    }


    return (
        <div className="Main">
            <div className="search">
                <h3>Search</h3>
                <div className="searchFilters">
                    By Name
                    <Searchbar 
                        onChange={handleNameChange}
                        onSubmit={queryByName}
                        />
                        By Organization<br></br>
                    <Dropdown
                        options={[
                            {label: "All", value: ""},
                            {label: 'AWS', value: "AWS"},
                            {label: 'Microsoft', value: "Microsoft"},
                            {label: 'CompTIA', value: "CompTIA"},
                            {label: 'ISC', value: "ISC"},
                        ]}
                        onChange={handleOrgChange}
                        />
                </div>
            </div>
            <div className="results">
                
            </div>
        </div>
    )
}

export default MainSearch