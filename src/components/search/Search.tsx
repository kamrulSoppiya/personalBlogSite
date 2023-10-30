import { useState, useEffect } from 'react';
import Input from '../input/Input';

function DebouncedSearchInput() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const delay = 300;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let debounceTimer:any;


  const simulateSearchAPI = (query) => {

    const mockData = [
      'Apple',
      'Banana',
      'Cherry',
      'Date',
      'Elderberry',
      'Fig',
      'Grape',
    ];
    return mockData.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );
  };

  const handleInputChange = (e) => {
    const { value } = e.target;
    setSearchTerm(value);

    clearTimeout(debounceTimer);

    debounceTimer = setTimeout(() => {
      const results = simulateSearchAPI(value);
      setSearchResults(results);
    }, delay);
  };

  useEffect(() => {
    return () => {
      clearTimeout(debounceTimer);
    };
  }, [debounceTimer]);

  return (
    <div>
      <Input type="text" placeholder="Search" value={searchTerm} onChange={handleInputChange} />
      <ul>
        {searchResults.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
    </div>
  );
}

export default DebouncedSearchInput;
