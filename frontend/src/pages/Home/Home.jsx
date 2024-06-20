import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreGenre from '../../components/ExploreGenre/ExploreGenre'
import BookDisplay from '../../components/BookDisplay/BookDisplay'


const Home = () => {

  const [category,setCategory] = useState("All");
  return (
    <div>
        <Header/>
        <ExploreGenre category={category} setCategory={setCategory}/>
        <BookDisplay category={category}/>
    </div>
  )
}

export default Home