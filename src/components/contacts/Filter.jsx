import React from "react";

const Filter = ({ filter, onChange }) => ( 
    <label>Find contacts by name
        <input
            type="text"
            value={filter}
            onChange={onChange}
        >        
        </input>
    </label>    
);

export default Filter;