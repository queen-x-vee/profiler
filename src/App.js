import React, { useState } from 'react'
import './index.css'
import profiler from './data'
import SearchBar from './components/SearchBar'
import CardGrid from './components/CardGrid'

const App = () => {
const [searchTerm, setSearchTerm] = useState("")

const getSearchTerm = (searchValue) =>{
  setSearchTerm(searchValue)
}
  const filteredData = profiler.filter((item) =>  // item.title.toLowerCase().startWith(searchTerm.toLowerCase()) ||
  searchTerm == "" ? item : item.firstName.toLowerCase().startsWith(searchTerm.toLowerCase()) || // remember that you are searching for a name, meaning the search value has to be the begiining of the name, startsWith is more effective than includes at this point
      item.lastName.toLowerCase().startsWith(searchTerm.toLowerCase())
  );

  return (
    <div className='bg-gradient-to-b from-pink-500 to-yellow-500 min-h-screen'>
    <SearchBar getSearchTerm={getSearchTerm}/>
    <CardGrid filteredData={filteredData}/>

    </div>
  )
}

export default App