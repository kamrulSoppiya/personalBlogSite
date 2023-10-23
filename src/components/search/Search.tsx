import React, { useState } from 'react';
import Input from '../input/Input';
import style from './search.module.css';

// Here Data come From Main Component 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SearchComponent= ({dummyData}:any) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchResults, setSearchResults] = useState<string[]>([]);
  
//   const dummyData = [
//     'Apple',
//     'Banana',
//     'Cherry',
//     'Date',
//     'Fig',
//     'Grape',
//     'Kiwi',
//     'Lemon',
//     'Mango',
//     'Orange',
//     'Pear',
//     'Strawberry',
//     'Watermelon',
//   ];

  let debounceTimeout: number | undefined;
  // eslint-disable-next-line @typescript-eslint/ban-types
  const debounce = (func: Function, delay: number) => {
    if (debounceTimeout !== undefined) {
      clearTimeout(debounceTimeout);
    }
  
    debounceTimeout = setTimeout(() => {
      func();
    }, delay);
  };
  
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchTerm(value);
  
    debounce(() => {
      const filteredResults = dummyData.filter(item =>
        item.toLowerCase().includes(value.toLowerCase())
      );
  
      setSearchResults(filteredResults);
    }, 1000);
  };

  return (
    <div>
        <div className={style.searchBox}>
            <Input type="text" placeholder="Search..." value={searchTerm} onChange={handleSearch}/>
        </div>
        
        <ul>
            {searchResults.map((result, index) => (
            <li key={index}>{result}</li>
            ))}
        </ul>
    </div>
  );
};

export default SearchComponent;
