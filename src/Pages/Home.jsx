import React from 'react'
import Header from '../components/Header'
import JumbotronMovies from '../components/Home/JumbotronMovies'
import ContainerMovies from '../components/Home/ContainerMovies'

function Home() {
  return (
    <div>
        <Header />
        <JumbotronMovies />
        <ContainerMovies />
    </div>
  )
}

export default Home;