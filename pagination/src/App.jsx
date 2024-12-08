import React, { useEffect, useState } from 'react';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url =
        'https://youtube-scraper3.p.rapidapi.com/api/v1/channels/search?query=mrbeast';
      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': 'd62f87498fmshae71024065bd048p1b566fjsn2a6f55d547fd',
          'x-rapidapi-host': 'youtube-scraper3.p.rapidapi.com',
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json(); // Parse JSON response
        console.log(result.data.channels);
        if (result.data && result.data.channels && Array.isArray(result.data.channels)) {
          setData(result.data.channels);
        } else {
          console.error('Invalid data format');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div>
        <h1>Pagination</h1>
      </div>
      <div className='grid grid-cols-3 gap-6 p-6'>
        {data.map((item, index) => (
          <div key={index} className='bg-blue-300 w-80 h-80'>
            <img src={item.avatar[1].url} alt="" />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
