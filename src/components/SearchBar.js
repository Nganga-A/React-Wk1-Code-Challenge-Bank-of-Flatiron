import React, {useState} from 'react';

const SearchBar = ({onSearch}) => {
    const [searchTerm, setSearchTerm] = useState('');

    //function to handle Search
    const handleSearch = (event) => {
        const newSearchTerm = event.target.value;
        setSearchTerm(newSearchTerm);
     onSearch(newSearchTerm);

    }

    return (
          <div>
             <input
               type='text'
               placeholder='Search  by description'
               value={searchTerm}
               onChange={handleSearch}
               />
          </div>
    );
};


export default SearchBar;