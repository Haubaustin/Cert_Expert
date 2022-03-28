import React from "react"

const Dropdown = ({ labelT, label, value, options, onChange }) => {
    return (
      <label>
        <select value={value} onChange={onChange}>
          {options.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
      </label>
    )
  }

  export default Dropdown