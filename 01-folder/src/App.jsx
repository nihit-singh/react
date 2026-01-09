import React from 'react'
import Card from './components/card'
import Navbar from './components/Navbar'
// import card from 'components/card.jsx'
const App = () => {
  return (
    <div className='parent'>
      <Card user='Sarthak' age={16}/>
      <Card user='Aman' age={28}/>
    </div>
  )
}

export default App
