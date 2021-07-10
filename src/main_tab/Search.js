import React from 'react';
import './Search.css';

const Search = ({value, onChange, onCreate, onKeyPress}) => {


    return(
        <div className="search">
            <input value={value} onChange={onChange} onKeyPress={onKeyPress}/>
            <div className="create-button" onClick={onCreate}>
                검색
            </div>
        </div>
    );
};

export default Search;