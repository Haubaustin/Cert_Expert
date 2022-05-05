import React, { useState } from "react";
import Searchbar from "./Searchbar";
import Dropdown from "./Dropdown";
import Certificate from "./Certificate";
import Client from "./api/api.jsx"


const MainSearch = () => {
    let [searchName, setSearchName] = useState("")
    const [nameResults, setNameResults] = useState([])
    const [orgName, setOrgName] = useState([])
    const [searchBy, setSearchBy] = useState(true)


    const handleNameChange = (e) => {
        setSearchName(e.target.value)
    }

    const findByName = async (e) => {
        setSearchBy(true)
        e.preventDefault()
        const name = await Client.get(`/api/name/${searchName}`)
        setNameResults(name.data.name)
    }

    const findByOrg = async (e) => {
        setSearchBy(false)
        if (e.target.value === "") {
            return }
            else {
        const org = await Client.get(`/api/org/${e.target.value}`)
        setOrgName(org.data.organization)
    }
}
    
    return (
        <div className="Main">
            <div className="search">
                <h3 className="subTitle">Search</h3>
                <div className="subSect">
                    <h4>By Name</h4>
                    <Searchbar 
                        onChange={handleNameChange}
                        onSubmit={findByName}
                        value={searchName}
                        />
                        <h4>By Organization</h4><br></br>
                    <Dropdown
                        options={[
                            {label: "Null", value: "null"},
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
                    <Certificate key={org._id} id={org._id} name={org.name} desc={org.description} img={org.image} />
                ))}
                {searchBy && nameResults.map((name) => (
                    <Certificate key={name._id} id={name._id} name={name.name} desc={name.description} img={name.image} />
                ))}
            </div>
        </div>
    )
}

export default MainSearch