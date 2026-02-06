import axios from 'axios';
import React, { useState } from 'react';

function App() {

  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const getData = async (page) => {
    setIsLoading(true);
    setUserData([]); // clear old data

    try {
      const response = await axios.get(
        `https://picsum.photos/v2/list?page=${page}&limit=9`
      );
      setUserData(response.data);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const nextIndex = () => {
    if (index < 10) {
      const newIndex = index + 1;
      setIndex(newIndex);
      scrollToTop();
      getData(newIndex);
    }
  };

  const prevIndex = () => {
    if (index > 1) {
      const newIndex = index - 1;
      setIndex(newIndex);
      scrollToTop();
      getData(newIndex);
    }
  };

  let displayData = (
    <h3 className="text-center col-span-3">
      Click Next to load images
    </h3>
  );

  if (isLoading) {
    displayData = (
      <h3 className="text-center col-span-3 animate-pulse">
        Loading...
      </h3>
    );
  } else if (userData.length > 0) {
    displayData = userData.map((elem, idx) => (
      <div key={idx} className="border-2 border-white p-2">
        <a href={elem.url} target="_blank" rel="noreferrer">
          <img
            src={elem.download_url}
            alt={elem.author}
            className="w-full h-48 object-cover mb-2"
          />
          <p className="text-center">{elem.author}</p>
        </a>
      </div>
    ));
  }

  return (
    <div className="bg-black text-white min-h-screen p-4">
      <h1 className="text-center text-xl">Gallery App</h1>

      <h2 className="text-center border-2 border-white p-2 mt-2">
        Page: {index}
      </h2>

      <div className="grid grid-cols-3 gap-4 mt-4">
        {displayData}
      </div>

      <div className="text-center mt-4">
        <button
          onClick={prevIndex}
          className="px-4 py-2 bg-blue-500 rounded"
        >
          Prev
        </button>

        <button
          onClick={nextIndex}
          className="px-4 py-2 bg-blue-500 rounded ml-2"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
