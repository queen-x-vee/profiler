import React from 'react'
import './index.css'
import profiler from './data'
import SearchBar from './Input'
const App = () => {
  return (
    <>
    <SearchBar data={profiler}/>
    </>
  )
}

export default App