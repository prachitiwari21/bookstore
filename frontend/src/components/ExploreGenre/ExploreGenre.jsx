import React from 'react'
import './ExploreGenre.css'
import { genre_list } from '../../assets/assets'

const ExploreGenre = ({category,setCategory}) => {
  return (
    <div className='explore-genre' id='explore-genre'>
        <h1>Explore genres</h1>
        <p className='explore-genre-text'>Choose from a an extensive collection of original books, both new and pre-loved. Our mission is to make quality literature accessible without burdening the reader's pocket.</p>
        <div className="explore-genre-list">
          {genre_list.map((item,index)=>{
            return (
              <div onClick={()=>setCategory(prev=>prev===item.genre_name?"All":item.genre_name)} key={index} className='explore-genre-list-item'>
                <img className={category===item.genre_name?"active":""} src={item.genre_image} alt="" />
                <p>{item.genre_name}</p>
              </div>
            )
          })}
        </div>
        <hr />
    </div>
  )
}

export default ExploreGenre