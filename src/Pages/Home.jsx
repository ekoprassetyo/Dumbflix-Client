import React from 'react'
import Header from '../components/Header'
import JumbotronMovies from '../components/Home/JumbotronMovies'
import ContainerMovies from '../components/Home/ContainerMovies'
import ContainerSeries from '../components/TV Show/ContainerSeries'

function Home() {
  return (
    <div>
        <Header />
        <JumbotronMovies />
        <ContainerMovies />
        <ContainerSeries />
    </div>
  )
}

export default Home;