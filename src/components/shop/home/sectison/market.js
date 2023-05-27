import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 
{ faHeart,faAngleRight} 
from '@fortawesome/free-solid-svg-icons'
import "./style.css"
import { fruits } from './data';

const Market = () => {
    const [iconColor, setIconColor] = useState('grey');

    const handleClick = () => {
    const newColor = iconColor === 'grey' ? 'red' : 'grey';
    setIconColor(newColor);
  };
  return (
    <>
    <div className="market-container">
        <div className='market-title'>
            <p className='title'>Đi chợ online</p>
            <div className='menu-title'>
                <a href='#shop'>Rau củ quả</a>
                <a href='#shop'>Thịt-hải sản</a>
                <a href='#shop'>Thực phẩm chế biến sẵn</a>
                <a href='#shop'>gạo</a>
            </div>
            <a className='see-all' href='#shop'>xem tất cả <FontAwesomeIcon icon={faAngleRight} size='xs' /></a>
        </div>
        <div className='container-product'>
            <div className='market-products-container'>
                {fruits.map((fruit, index) => (
                    (index < 8) && (
                    <div className="market-product" key={fruit.id}>
                        <span className='favorite'> 
                        <FontAwesomeIcon icon={faHeart} 
                            style={{ color: iconColor }} 
                            onClick={handleClick}
                            id={fruit.id} />
                        </span>
                        <div className='item-product'>
                            <img src={fruit.image} alt={fruit.name}/>      
                            <h3 className="market-product-title">{fruit.name}</h3>
                            <p className="market-product-description">{fruit.description}</p>
                            <span className="market-product-price">Giá: {fruit.price} đồng</span>
                        </div>
                        <button className="add-to-cart-btn codepro-btn codepro-btn-2 hover-slide-right" 
                            target="blank" 
                            title="Code Pro">
                        <span>thêm vào giỏ hàng</span></button>
                    </div>
                    )
                    ))}
                </div>
            </div>
        </div>
   

    </> 
  )
}

export default Market