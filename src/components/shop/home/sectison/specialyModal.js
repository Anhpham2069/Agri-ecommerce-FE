import React from 'react'
import "./style.css"

const specialyModal = ({divName,DivContent}) => {
  return (
    <>
    {divName==="Nam" ?
    <div className='modal-area-south'> This is the modal for{DivContent} {divName}</div>
    :divName==="Trung"?
    <div className='modal-area-mid'> This is the modal for{DivContent} {divName}</div>
    :<div className='modal-area'> This is the modal for{DivContent} {divName}</div>    
}
        
    </>
  )
}

export default specialyModal