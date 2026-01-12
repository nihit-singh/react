import React, { useState } from 'react'

function App() {

  const [title, setTitle] = useState('');

  const [notes, setNotes] = useState('');

  const [notesList, setNotesList] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('Note Added Successfully!');
    console.log('Title:', title);
    console.log('Notes:', notes);
    
    if (!title || !notes) return;

  setNotesList((prev) => [
    ...prev,
    { title, notes }
  ]);

  setTitle("");
  setNotes("");
  }

  const titleUpdateHandler = (e) => {
    setTitle(e.target.value);
  }

  const notesUpdateHandler = (e) => {
    setNotes(e.target.value);
  }


  return (
    <div className='flex flex-row min-h-screen'>
      <form onSubmit={submitHandler} className='flex flex-col w-1/2 gap-4 pt-10 px-10 lg:w-1/2'>
          <span className='text-3xl font-bold mb-4 text-center'>Add Notes</span>

          <input onChange={titleUpdateHandler}
          type="text"
          placeholder="Type Note Heading..."
          className="  border border-gray-300 rounded-l px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={title}
        />

        <textarea onChange={notesUpdateHandler}
          placeholder="Notes details..."
          className="border border-gray-300 px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={notes}
        ></textarea>
        
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add Note
        </button>
      </form>

      <div className='w-1/2 mx-10 pt-10 lg:w-1/2 border-l-2 pl-10'>
        <h2 className='text-2xl font-bold'>Your Notes</h2>
        <div className='flex flex-wrap gap-4 shadow-md rounded p-4 mb-4 max-w-md mx-auto'>
          
          {notesList.map((note, index) => (
            <div key={index} className='h-40 w-30 rounded-2xl bg-white p-4 shadow'>
              <h3 className='text-black text-xl font-semibold mb-2'>{note.title}</h3>
              <p className='text-gray-700'>{note.notes}</p>
            </div>
          ))}
          
        </div>
      </div>
    </div>
  )
}

export default App
