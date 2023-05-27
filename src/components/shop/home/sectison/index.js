import React from 'react'
import Market from './market'
import Fruit from './fruit'
import SpecialtyComponent from './specialty'
import News from './news'

const ContentComponent = () => {
  return (
    <div>
       <Market />
       <Fruit />
       <SpecialtyComponent />
       <News />
    </div>
  )
}

export default ContentComponent