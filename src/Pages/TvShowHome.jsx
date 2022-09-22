import React from 'react'
import Header from '../components/Header'
import JumbotronTvShow from '../components/TV Show/JumbotronTvShow'
import ContainerSeries from '../components/TV Show/ContainerSeries'

function TvShowHome() {
  return (
    <div>
        <Header />
        <JumbotronTvShow />
        <ContainerSeries />
    </div>
  )
}

export default TvShowHome