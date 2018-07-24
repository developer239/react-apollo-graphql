import React from 'react'
import { Image } from 'components'
import DummyImage from './dummy.png'


const HomePage = () => (
  <div>
    Home Page <br />
    <Image src={DummyImage} alt="dummy" />
  </div>
)

export default HomePage
