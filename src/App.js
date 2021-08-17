import React, { useEffect } from 'react'
import Tmdb from './Tmdb'

export default () => {

  useEffect(()=>{
    const loadAll = async () => {
      // Pegando lista
      let list = await Tmdb.getHomeList()
      console.log(list)
    }

    loadAll()
  },[])
  return(
    <div>
      Olá Mundo! Se prepare
    </div>
  )
}