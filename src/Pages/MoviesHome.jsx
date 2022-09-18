import React from 'react'
import Header from '../components/Header'
import JumbotronMovies from '../components/Movies/JumbotronMovies'
import ContainerMovies from '../components/Movies/ContainerMovies'

function MoviesHome() {
  return (
    <div>
        <Header />
        <JumbotronMovies />
        <ContainerMovies />
    </div>
  )
}

export default MoviesHome