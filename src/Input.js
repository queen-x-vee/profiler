import React, { useState } from "react";

const SearchBar = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.lastName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='min-h-screen bg-gradient-to-b from-pink-500 to-yellow-500 py-[3rem]'>
      <div className="flex justify-center h-[3rem] mb-[3rem] ">
      <input
      className="w-10/12 pl-[2rem] border-none rounded-lg outline-none"
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      </div>
      <div className="grid grid-cols-2 gap-4 w-10/12 mx-auto">
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
      </div>
    </div>
  );
};

export default SearchBar;
