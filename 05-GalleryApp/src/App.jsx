import axios from 'axios';
import React, { useEffect, useState } from 'react'


function App() {

  const [userData, setUserData] = React.useState(10);

  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=2&limit=30`);
    
    setUserData(response.data);
    console.log(response.data);
  }

  useEffect(() => {
    getData();
  }, []);

  let displayData = <h3 className='text-center'>Click for Loading...</h3>;

  if (userData.length > 0) {
    displayData = userData.map((elem,idx) => {
      return (
        <div key={idx} className='border-2 border-white p-2'>
          <a href={elem.url} target="_blank" rel="noreferrer">  
          <img src={elem.download_url} alt={elem.author} className='w-full h-48 object-cover mb-2' />
          <p className='text-center'>{elem.author}</p>
          </a>
        </div>
      );
    })
  }

  return (
    <div className='bg-black text-white h-full p-4'>
      
      <div className='grid grid-cols-3 gap-4 mt-4'>
        {displayData}
      </div>

    </div>
  );
}

export default App;
