import React, { useState } from 'react';

function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('');
  

  const contentList = [
    'fruit',
    'dodo',
    'beans',
    'milk',
    'egg',
    'orange',
    'plantain',
    'banana',
    'pig',
    'meat',
    'car',
    'clothe',
    'cloud',
    'race',
    'shop',
    'chop',
    'seed',
    'mouse',
    'fguit',
    'doodo',
    'beans',
    'mijk',
    'ehg',
    'otaange',
    'pytantain',
    'baynana',
    'pi',
    'piss',
    'pigi',
    'metrat',
    'caytr',
    'clllothe',
    'cloooud',
    'rggace',
    'sthop',
    'chop',
    'seed',
    'mytouse',
    'gucci',
    'gabbana',
    'sariya',
    'monitor',
    'cpu',
    'model',
    'pam',
  ];

    const results = contentList.filter((item) =>
      item.startsWith(searchTerm)
    );
    // console.log(filteredResults);

  return (
    <div>
      <h1>Search Page</h1>
      <input type="text" placeholder="Enter your search term" value={searchTerm} onChange={(e) => setSearchTerm(e.target .value)}/>
     
      {
        results.map((result, index) => (
        <div key={index}>{result}</div>
      ))
    } 
    </div>
  );
}

export default SearchPage;
