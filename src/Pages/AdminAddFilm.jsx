import React from 'react'
import Header from '../components/HeaderAdmin'
import AddFilm from '../components/AdminAddFilm/AddFilm'


function AdminHome() {
  return (
    <div>
        <Header />
       <AddFilm />
    </div>
  )
}

export default AdminHome;