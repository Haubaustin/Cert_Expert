import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Main = () => {
    const [ data, setData] = useState([])

    useEffect(()=> {
        const getRecent = async () => {
            const recentUp = await axios.get(`http://localhost:3001/api/new`)
            setData(recentUp.data.recent)
            console.log(recentUp.data.recent)
        }
        getRecent()
    }, [])




    return (
        <div>
            <section className="recUpdate">
                <h3>Recently Updated</h3>
                <div className="updateDiv">
                {data.map((recent) => (
                        <div className="updateList">
                            <Link to={`/search/${recent.cert}`}>
                            Study Resource: {recent.displayName} 
                            <br></br>
                            <br></br>
                            Updated At:{recent.updatedAt}
                            </Link>
                        </div>
                ))}

                    </div>

            </section>
            <div className="about">
                <section className="why">
                    <h3>Why use <span>CertExpert?</span></h3>
                    <p>Choosing which IT certificate you should get, can almost be as stressful as studying for one. Some questions you might find yourself asking are; Which certificate best fits the job I want? How should I study for this test? What are some of the best study resources for this test? Until now, the best way to answer these questions was scouring through Reddit threads.<br></br> Enter <span>Cert Expert</span>. A one stop shop for all your IT certificate questions. <span>Cert Expert's</span> goal is to centralize all the questions and answers on IT certifications to provide easily digestible information</p>
                </section>
                <section className="how">
                    <h3>How to use <span>CertExpert?</span></h3>
                    <p> It's simple!! Click on Search in the top left and filter to find the certificate you are thinking about. Clicking on that certificate will display all the available information about it.</p>
                </section>
            </div>
        </div>
    )
}

export default Main