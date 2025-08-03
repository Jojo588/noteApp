import React from 'react'

const Header = ({searchTerm, setSearchTerm}) => {

  return (
    
    <>
    <div className='HomeHeader' style={{display:"flex", justifyContent: "space-between" ,width:'100%', padding:'10px'}}>
    <h2 style={{textTransform:"capitalize"}}>
      note pad
    </h2>
    <input
        type="text"
        className='search'
        placeholder="Search note by header..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: '8px',
          marginBottom: '10px',
          fontSize: '16px',
          borderRadius: '8px',
          border: '1px solid black',
          backgroundColor: 'transparent'
        }}
      />
    </div>


  </>
  )
}

export default Header