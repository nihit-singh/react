import axios from 'axios';
import React, { useEffect, useState } from 'react'


function App() {
  
  const [userData, setUserData] = React.useState(10);
  const [index,setIndex] = useState(1);

  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=9`);
    
    setUserData(response.data);
    console.log(response.data);
  }

  useEffect(() => {
    getData();
  }, [index]);

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

  const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

  const prevIndex = () => {
    if(index > 1){
      setIndex(index - 1);
      scrollToTop();
    }
  }

  const nextIndex = () => {
    if(index < 10){
      setIndex(index + 1);
      scrollToTop();
    }
  }

  return (
    <div className='bg-black text-white h-full p-4'>
      <h1 className='text-center col-span-3'>Gallery App</h1>
      
      <h2 className='text-center border-2 border-white p-2'>{index}</h2>
      <div className='grid grid-cols-3 gap-4 mt-4'>
        {displayData}
      </div>

      <div className='text-center mt-4'>
        <button onClick={prevIndex} className='px-4 py-2 bg-blue-500 text-white rounded'>Prev</button>
        <button onClick={nextIndex} className='px-4 py-2 bg-blue-500 text-white rounded ml-2'>Next</button>
      </div>

    </div>
  );
}

export default App;
