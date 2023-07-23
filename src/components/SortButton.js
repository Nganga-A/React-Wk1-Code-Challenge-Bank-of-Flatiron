import React from 'react';

const SortButton = ({ onSort }) => {
  return <button className='sortButton' onClick={onSort}>Sort Category Alphabetically</button>;
};

export default SortButton;
