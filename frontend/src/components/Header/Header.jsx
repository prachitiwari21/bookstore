import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className="header-contents">
            <h2>Order your next read here!</h2>
            <p>"The more that you read, the more things you will know. The more that you learn, the more places you’ll go."</p>
            <button>View Books</button>
        </div>
    </div>
  )
}

export default Header