import React, { useEffect, useState } from 'react'
import Tmdb from './Tmdb'
import MovieRow from './components/MovieRow'

export default () => {

  const [moveList, setMovieList] = useState([])

  useEffect(()=>{
    const loadAll = async () => {
      // Pegando lista
      let list = await Tmdb.getHomeList()
      setMovieList(list)
    }

    loadAll()
  },[])
  return(
    <div className="page">
      <section className="lists">
        {moveList.map((item, key) => (
          <div>
            <MovieRow key={key} title={item.title} items={item.items}/>
          </div>

        ))}
      </section>
    </div>
  )
}