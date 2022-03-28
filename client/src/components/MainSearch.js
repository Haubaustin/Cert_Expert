import React, { useState } from "react";
import Searchbar from "./Searchbar";
import axios from "axios"
import Dropdown from "./Dropdown";
import Certificate from "./Certificate";
import { Link } from "react-router-dom";
import Certificatedetails from "./Certificatedetails";


const MainSearch = () => {
    let [searchName, setSearchName] = useState([])
    const [nameResults, setNameResults] = useState([])
    const [orgName, setOrgName] = useState([])
    const [searchBy, setSearchBy] = useState(true)


    const handleNameChange = (e) => {
        setSearchName(e.target.value)
    }

    const findByName = async (e) => {
        setSearchBy(true)
        e.preventDefault()
        const name = await axios.get(`http://localhost:3001/api/name/${searchName}`)
        setNameResults(name.data.name)
    }

    const findByOrg = async (e) => {
        setSearchBy(false)
        if (e.target.value === "") {
            return }
            else {
        const org = await axios.get(`http://localhost:3001/api/${e.target.value}`)
        setOrgName(org.data.organization)
    }
}
    
    return (
        <div className="Main">
            <div className="search">
                <h3>Search</h3>
                <div className="searchFilters">
                    <h5>By Name</h5>
                    <Searchbar 
                        onChange={handleNameChange}
                        onSubmit={findByName}
                        value={searchName}
                        />
                        <h5>By Organization</h5><br></br>
                    <Dropdown
                        options={[
                            {label: "Null", value: ""},
                            {label: 'AWS', value: "AWS"},
                            {label: 'Microsoft', value: "Microsoft"},
                            {label: 'CompTIA', value: "CompTIA"},
                            {label: 'ISC', value: "ISC"},
                        ]}
                        onChange={findByOrg}
                        />
                </div>
            </div>
            <div className="results">
                {!searchBy && orgName.map((org) => (
                    <Link to={`${org.name}`} >
                    <Certificate key={org._id} name={org.name} desc={org.description} img={org.image} />
                    </Link>
                ))}
                {searchBy && nameResults.map((name) => (
                    <Certificate key={name._id} name={name.name} desc={name.description} img={name.image} />
                ))}
            </div>
        </div>
    )
}

export default MainSearch