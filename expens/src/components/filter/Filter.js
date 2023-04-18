import React from 'react';
import './Filter.css';

const Filter = (props) => {
    const dropdownChangeHandler = (event) => {
        props.onFilter(event.target.value);
    };

    return (
        <div>
            <label className={'filter__text'}>Filter by year </label>
            <select className={'dropdown'} onChange={dropdownChangeHandler}>
                <option value=''>All</option>
                <option value='2022'>2022</option>
                <option value='2023'>2023</option>
                <option value='2024'>2024</option>
            </select>
        </div>
    );
};

export default Filter;
