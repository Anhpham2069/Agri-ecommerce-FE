import React, { Fragment } from "react";
import moment from "moment";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 
{ faHouse,faLocationDot,faEnvelope,faPhone} 
from '@fortawesome/free-solid-svg-icons'
import 
{faFacebook,faInstagram} 
from '@fortawesome/free-brands-svg-icons'
import "./style.css";

const Footer = (props) => {
  return (
    <Fragment>
      <footer
        className="footer-container z-10"
      >
        <div className="footer-top"></div>
        <div className="footer">

        <div className="footer-address">
          <b className="title-footer">Nông sản xanh</b>
          <li><FontAwesomeIcon icon={faHouse} /> &nbsp;Số 1 Đại Cồ Việt, Hai Bà Trưng</li>
          <li><FontAwesomeIcon icon={faLocationDot} />&nbsp;Số 123 Lê Duẩn, Hoàn Kiếm</li>
          <li><FontAwesomeIcon icon={faLocationDot} />&nbsp;Số 456 Nguyễn Trãi, Thanh Xuân</li>
          <li><FontAwesomeIcon icon={faLocationDot} />&nbsp;Cửa Việt 2 Trâu quỳ, Gia Lâm</li>
         
        </div>
        <div className="footer-account">
          <ul>
            <li><b style={{color:"black"}}>TÀI KHOẢN</b></li>
            <li>Tài khoản của tôi</li>
            <li>Giỏ Hàng</li>
          </ul>
          <ul>
            <li><b style={{color:"black"}}>THÔNG TIN</b></li>
            <li>Thông tin về Nông sản xanh</li>
          </ul>
        </div>
        <div className="footer-contact">
          <li><b style={{color:"black"}}>Liên hệ</b></li>
          <li><FontAwesomeIcon icon={faEnvelope} />Email: Anhp2069@gmail.com</li>
          <li><FontAwesomeIcon icon={faPhone} />Hotline: 096552991</li>
          <li><FontAwesomeIcon icon={faFacebook} />Facebook</li>
          <li> <FontAwesomeIcon icon={faInstagram} />Instagram</li>
          {/* <li><FontAwesomeIcon icon={faYouTube} />Youtube</li> */}
        </div>
        </div>
       
        {moment().format("YYYY")} © Copyright. All Rights Reserved.
      </footer>
    </Fragment>
  );
};

export default Footer;
