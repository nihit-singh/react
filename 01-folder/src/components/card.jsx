import React from 'react'

const card = (props) => {
    
  return (
    <div>
      <div className='parent'>
        <div className='card'>
          <img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="profile pic" />
          <h2>
            Name: {props.user}, Age: {props.age}
          </h2>
          
          {props.age >= 18 ? <p>Eligible to vote.</p> : <p>Not eligible to vote.</p>}

          <button>View Profile</button>
        </div>
      </div>
    </div>
  ) 
}

export default card
