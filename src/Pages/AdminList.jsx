import React from 'react'
import Header from '../components/HeaderAdmin'
import ListFilm from '../components/AdminList/ListFilm'


function AdminHome() {
  return (
    <div>
        <Header />
       <ListFilm />
    </div>
  )
}

export default AdminHome;