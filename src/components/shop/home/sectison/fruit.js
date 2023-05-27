import React,{useState,useEffect,useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 
{ faHeart} 
from '@fortawesome/free-regular-svg-icons'
import 
{faAngleRight,faCircleChevronRight} 
from '@fortawesome/free-solid-svg-icons'
import "./style.css"
// import { fruits } from './data';
import { getAllProduct } from "../../../admin/products/FetchApi";
import { HomeContext } from "../index";
import { useHistory, useParams } from "react-router-dom";

import { isWishReq, unWishReq, isWish } from "../Mixins";

const apiURL = process.env.REACT_APP_API_URL;


const Fruit = () => {
    const history = useHistory();

    const { data, dispatch } = useContext(HomeContext);
    const { products } = data;
    const [iconColor, setIconColor] = useState('black');
    const [wList, setWlist] = useState(
      JSON.parse(localStorage.getItem("wishList"))
    );
    // const [showAll, setShowAll] = useState(false);
    // const [products,setProducts] = useState([])

    // const toggleShowAll = () => {
    //     setShowAll(!showAll);
    // };

  //   const handleClick = (e,itemId) => {
  //     console.log(e)
  //     if(itemId===e){
  //       const newColor = iconColor === 'black' ? 'red' : 'black';
  //       setIconColor(newColor);
        
  //       console.log(newColor)
  //       // products.map((item,index)=>{
  //       //   }
  //       // })
  //     }
  // };

  
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = async () => {
    dispatch({ type: "loading", payload: true });
    try {
      let responseData = await getAllProduct();
      setTimeout(() => {
        if (responseData && responseData.Products) {
          dispatch({ type: "setProducts", payload: responseData.Products });
          dispatch({ type: "loading", payload: false });
        }
      }, 500);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(products)
  return (
    <>
    <div className="market-container">
        <div className='market-title'>
            <p className='title'>Hoa quả tươi ngon</p>
            <div className='menu-title'>
                <a href='#shop'>Nội địa</a>
                <a href='#shop'>Nhập khẩu</a>
                <a href='#shop'>Xấy khô</a>
                <a href='#shop'>Đông lạnh</a>
            </div>
            <a className='see-all' href='#shop'>xem tất cả <FontAwesomeIcon icon={faAngleRight} size='xs' /></a>
        </div>
        <div className='container-product-fruit'>
            <div className='fruit-products-container'>
                {products && products.length > 0 ? (
                    products.map((item,index)=>{
                        return(
                            <div className="market-product" key={index}>
                                {/* <span className='favorite' onClick={(e)=>e.target._id = iconColor === 'black' ? 'red' : 'black'}> 
                                <FontAwesomeIcon icon={faHeart} 
                                    onClick={(e) => isWishReq(e, item._id, setWlist)}
                                    style={{ color: iconColor }} 
                                    />
                                </span> */}
                                <div className="absolute top-0 right-0 mx-2 my-2 md:mx-4">
                                  <svg
                                    onClick={(e) => isWishReq(e, item._id, setWlist)}
                                    className={`${
                                      isWish(item._id, wList) && "hidden"
                                    } w-7 h-7 md:w-7 md:h-7 cursor-pointer text-red-700 transition-all duration-300 ease-in`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                    />
                                  </svg>
                                  <svg
                                    onClick={(e) => unWishReq(e, item._id, setWlist)}
                                    className={`${
                                      !isWish(item._id, wList) && "hidden"
                                    } w-7 h-7 md:w-6 md:h-6 cursor-pointer text-red-500 transition-all duration-300 ease-in`}
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                </div>
                                <div className='item-product'>
                                    <img 
                                    onClick={(e) => history.push(`/products/${item._id}`)}
                                    src={`${apiURL}/uploads/products/${item.pImages[0]}`}
                                    alt=""/>      
                                    <h3 className="market-product-title">{item.pName}</h3>
                                    {/* <span className="text-gray-700">
                                      {item.pRatingsReviews.length}
                                  </span> */}
                                    <p className="market-product-description">Số Lượng : {item.pQuantity}</p>
                                    <span className="market-product-price">Giá: {item.pPrice} đồng</span>
                                </div>
                                <button className="add-to-cart-btn codepro-btn codepro-btn-2 hover-slide-right" 
                                    target="blank" 
                                    title="Code Pro">
                                <span>thêm vào giỏ hàng</span></button>
                            </div>
                        )
                    
                    })
                ):[]}
                <span className='next-product'>
                    <FontAwesomeIcon icon={faCircleChevronRight} size='xl'/>
                </span>
            </div>
        </div>
    </div>

    </> 
  )
}

  
  
   
export default Fruit