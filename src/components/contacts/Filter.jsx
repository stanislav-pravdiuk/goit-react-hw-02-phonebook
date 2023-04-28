import React from "react";
import css from './filter.module.css'

const Filter = ({ filter, onChange }) => ( 
    <label className={css.filter}>Find contacts by name
        <input
            type="text"
            value={filter}
            onChange={onChange}
        >        
        </input>
    </label>    
);

export default Filter;