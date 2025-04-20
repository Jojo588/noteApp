import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'



const NewNotes = ({setNoteText}) => {
  const resolvedPath = useResolvedPath('/')
  const isHome = useMatch({ path: resolvedPath.pathname, end: true })



  return (
    <div>
      {isHome?  <Link
        to="/createnote" >
        <button onClick={()=>{setNoteText({ header: "", note: "" });}} style={{marginTop:"20px", width:"20%", fontSize:"20px", textTransform:"capitalize", borderRadius:"10px", padding: "5px", cursor: 'pointer', background:"transparent"}}>
            + new note  
        </button>
        </Link>: <Link to="/" ><button style={{fontSize: "20px",textTransform:"capitalize", borderRadius:"10px" ,padding: "5px", cursor: 'pointer',background:"transparent" }}>
        back</button></Link>
}
        






    </div>
  )
}

export default NewNotes