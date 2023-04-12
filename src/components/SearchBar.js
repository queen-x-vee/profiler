import React, { useState } from "react";

const SearchBar = ({ getSearchTerm }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    if(searchTerm.length < 1 && event.target.value.trim().length < 1) return
    setSearchTerm(event.target.value);
    getSearchTerm(event.target.value)
  };

  return (
    <div className=' py-[3rem]'>
      <div className="flex justify-center h-[3rem] mb-[3rem] ">
      <input
      className="w-10/12 pl-[2rem] border-none rounded-lg outline-none"
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      </div>
      {/* This is the searchbar component and should contain just the input, try enjoying the component feature of React */}
      {/* <div className="grid grid-cols-2 gap-4 w-10/12 mx-auto">
      {filteredData.map(e=>{
    return(
        <div className=' bg-white px-[1.5rem] py-[1.5rem] flex gap-3
        ' key ={e.id}>
            <div>
                <img src={e.picture} alt={e.firstName}/>
            </div>
         <div>
         <p>
            {e.id}
         </p>
         <p>
            {e.firstName} {e.lastName}
         </p>
         </div>
        </div>
    )
   })}
      </div> */}
    </div>
  );
};

export default SearchBar;
