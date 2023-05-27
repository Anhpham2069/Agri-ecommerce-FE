import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 
{ faHeart} 
from '@fortawesome/free-regular-svg-icons'
import 
{faAngleRight} 
from '@fortawesome/free-solid-svg-icons'
import "./style.css"
import Map from "../../../../images/product-page/bando.jpg"
import Modal from "./specialyModal"
import { fruits } from './data';



const SpecialtyComponent = () => {
    const [iconColor, setIconColor] = useState('black');
    // const [showAll, setShowAll] = useState(false);
    // const [showModal, setShowModal] = useState(false);
    const [area, setArea] = useState([
        { id: 1, name: 'Bắc',content:"Miền Bắc Việt Nam là một vùng đất đa dạng về văn hóa, lịch sử và nông nghiệp. Với cảnh quan thiên nhiên phong phú, miền Bắc là một trong những vùng đất phát triển nông nghiệp quan trọng của đất nước. Đồng thời, miền Bắc cũng nổi tiếng với những đặc sản nông sản độc đáo và chất lượng cao.Một trong những đặc sản nông sản nổi tiếng của miền Bắc là gạo nếp cái hoa vàng. Loại gạo này có hạt nhỏ, trắng ngần và mềm mịn. Gạo nếp cái hoa vàng thường được sử dụng để làm các món ăn truyền thống như xôi nếp, bánh chưng, bánh dày và bánh giầy. Hương vị đặc trưng và mùi thơm đặc biệt của gạo nếp cái hoa vàng đã làm nên sự nổi tiếng của đặc sản này.Miền Bắc cũng được biết đến với một loại cây trái nổi tiếng là mận Lục Ngạn. Mận Lục Ngạn có vị ngọt thanh, thịt mận giòn và hương thơm đặc trưng. Đây là loại mận được trồng ở vùng cao nguyên Lục Ngạn, tỉnh Bắc Giang. Mận Lục Ngạn không chỉ ngon mà còn có nhiều giá trị dinh dưỡng và là nguồn cung cấp vitamin C tự nhiên.Ngoài ra, miền Bắc còn sản xuất nhiều loại trái cây và rau quả chất lượng khác như táo Sapa, nho Vàng Đà Lạt, đu đủ, bí đỏ, cải bắp, cải thảo và nhiều loại rau xanh khác. Các sản phẩm nông sản từ miền Bắc thường được trồng trên đất đai trong sạch và được chăm sóc bằng các phương pháp truyền thống để đảm bảo chất lượng và giữ nguyên hương vị tự nhiên.Với đặc sản nông sản độc đáo và chất lượng cao, miền Bắc Việt Nam không chỉ là điểm đến hấp dẫn về du lịch mà còn là một thế giới ẩm thực phong phú và đa dạng, thu hút sự quan tâm của nhiều người trong và ngoài nước", showModal: false },
        { id: 2, name: 'Trung', showModal: false },
        { id: 3, name: 'Nam', showModal: false },
        // Thêm các div khác vào đây
      ]);

    //favorie 
    const handleClick = (e) => {
        const clickedElementId = e.target.dataset.id;
        const newColor = iconColor === 'black' ? 'red' : 'black';
        setIconColor(newColor);
    };
    // show modal-map
    const handleMouseOver = (divId) => {
        const updatedDivs = area.map((div) => {
          if (div.id === divId) {
            return { ...div, showModal: true };
          }
          return div;
        });
        setArea(updatedDivs);
      };
    
      const handleMouseLeave = (divId) => {
        const updatedDivs = area.map((div) => {
          if (div.id === divId) {
            return { ...div, showModal: false };
          }
          return div;
        });
        setArea(updatedDivs);
      };
    return (
    <>
    <div className="market-container">
        <div className='market-title'>
            <p className='title'>Đặc sản vùng miền</p>
            <div className='menu-title'>
                <a href='#shop'>Tây Bắc</a>
                <a href='#shop'>Tây Nguyên</a>
                <a href='#shop'>Miền Tây</a>
                <a href='#shop'>Ven biển</a>
                
            </div>
            <a className='see-all' href='#shop'>xem tất cả <FontAwesomeIcon icon={faAngleRight} size='xs' /></a>
        </div>
        <div className='container-product-specialy'>
            <div className='map-container'>
                <div className='img-map'>
                    <img  src={Map} alt='anh' style={{width:"100%"}}/>
                </div>
                <div className='area-map'>
                {area.map((div) => (
                    <div
                    key={div.id}
                    onMouseOver={() => handleMouseOver(div.id)}
                    onMouseLeave={() => handleMouseLeave(div.id)}
                    >
                    <div className="area">
                        <p>{div.name}</p>
                    </div>
                        {div.showModal && <Modal divName={div.name} DivContent={div.content} />}
                    </div>
                ))}
                </div>
            </div>
            <div className='specialy-products-container'>
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
            
                {/* <span className='next-product'>
                    <FontAwesomeIcon icon={faCircleChevronRight} size='xl'/>
                </span> */}
            </div>
        </div>
    </div>

    </> 
  )
}

export default SpecialtyComponent