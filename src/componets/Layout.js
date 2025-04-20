import React from 'react'
import { Outlet } from 'react-router-dom'
import NewNotes from './NewNotes'

const Layout = ({setNoteText}) => {
  return (
    <div>
        <main>
            <Outlet />
        </main>
        <NewNotes
        setNoteText={setNoteText} />
    </div>
  )
}

export default Layout