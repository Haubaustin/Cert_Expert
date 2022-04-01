import React from "react"

const Dropdown = ({ value, options, onChange }) => {
    return (
        <select 
          value={value}  
          onChange={onChange}>
          {options.map((option) => (
            <option 
              key={option.label} 
              value={option.value}>
                {option.label}
            </option>
          ))}
        </select>
    )
  }

  export default Dropdown