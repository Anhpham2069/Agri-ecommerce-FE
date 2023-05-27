import React from 'react'
import "./style.css"




const News = () => {
  return (
    <>
    <div className="news-container">
        <div className='news-title'>
            <p>Tin tức và kiến thức</p>
            <div className='list-menu'>
                <li>Chuyện nhà Nông</li>
                <li>Bí kíp nấu ăn</li>
                <li>Không gian xanh</li>
            </div>
        </div>
        <div className='list-post-container'>
            <div className='post-detail-main'>
                <img className='' alt='anh'/>
                <b className='post-title'>Bạn của nhà nông</b>
                <b className='post-detail'> Bạn của nhà nôngBạn của nhà nôngBạn của nhà nông</b>
            </div>
            <div className='post-detail'>
                <img className='' alt='anh'/>
                <b className='post-title'>Bạn của nhà nông</b>
                <b className='post-detail'> Bạn của nhà nôngBạn của nhà nôngBạn của nhà nông</b>
            </div>
            <div className='list-post'>
                <div className='post-detail'>
                    <img className='' alt='anh'/>
                    <b className='post-title'>Bạn của nhà nông</b>
                </div>
                <div className='post-detail'>
                    <img className='' alt='anh'/>
                    <b className='post-title'>Bạn của nhà nông</b>
                </div>
                <div className='post-detail'>
                    <img className='' alt='anh'/>
                    <b className='post-title'>Bạn của nhà nông</b>
                </div>
                <div className='post-detail'>
                    <img className='' alt='anh'/>
                    <b className='post-title'>Bạn của nhà nông</b>
                </div>
            </div>
        </div>
      
    </div>
    </> 
  )
}

export default News