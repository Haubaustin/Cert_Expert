import React from "react"

const Dropdown = ({ value, options, onChange }) => {
    return (
        <select 
          value={value}
          className="Dropdown"  
          onChange={onChange}>
          {options.map((option) => (
            <option 
              className="Dropdown"
              key={option.label} 
              value={option.value}>
                {option.label}
            </option>
          ))}
        </select>
    )
  }

  export default Dropdown