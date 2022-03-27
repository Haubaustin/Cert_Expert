import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'





const Footer = () => {
  
    return (
        <div className="Footer">
            <a href="https://www.linkedin.com/in/austin-haubenschild-211472169/" 
            className="linkedin" 
            target="_blank" 
            rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="https://github.com/Haubaustin"
            className="github" 
            target="_blank" 
            rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
        </div>
    )
}
export default Footer