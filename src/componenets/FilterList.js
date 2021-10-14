import React from 'react';
import './FilterList.css';

const FilterList = (props) => {
  const removeItem = (event) => {
    props.removeFilterItem(event.target.previousSibling.innerHTML);
  };
  const clearItems = () => {
    props.clearFilteredItems();
  };

  return (
    <div className={`filter-container ${props.showFilterList ? '' : 'hide'}`}>
      <div className='filter-items-container'>
        {props.filteredSkills.map((skill) => (
          <div key={skill} className='filter-item-container'>
            <span className='filter-item'>{skill}</span>
            <span className='remove-item' onClick={removeItem}>
              X
            </span>
          </div>
        ))}
      </div>
      <div className='clear-items' onClick={clearItems}>
        Clear
      </div>
    </div>
  );
};

export default FilterList;
