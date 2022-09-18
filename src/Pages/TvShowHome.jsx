import React from 'react'
import Header from '../components/Header'
import JumbotronTvShow from '../components/TV Show/JumbotronTvShow'
import ContainerTvShow from '../components/TV Show/ContainerTvShow'

function TvShowHome() {
  return (
    <div>
        <Header />
        <JumbotronTvShow />
        <ContainerTvShow />
    </div>
  )
}

export default TvShowHome