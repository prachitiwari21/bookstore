import React, {useContext, useState} from 'react'
import './BookItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext';
const BookItem = ({id,name,price,description,image}) => {

    // const [itemCount,setItemCount] = useState(0);
    const {cartItems,addToCart,removeFromCart,url} = useContext(StoreContext);

  return (
    <div className='book-item'>
        <div className="book-item-img-container">
            <img className="book-item-image" src={url+"/images/"+image} alt="" />
            {!cartItems[id]
                ?<img className='add' onClick={()=>addToCart(id)} src = {assets.add_icon_white} alt=""/>
                :<div className='book-item-counter'>
                    <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                    <p>{cartItems[id]}</p>
                    <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
                </div>
            }
        </div>
        <div className="book-item-info">
            <div className="book-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className="book-item-description">
                ~{description}
            </p>
            <p className="book-item-price">${price}</p>
        </div>
        
    </div>
  )
}

export default BookItem