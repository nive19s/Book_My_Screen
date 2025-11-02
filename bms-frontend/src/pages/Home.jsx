import React from 'react'
import BannerSlider from '../components/shared/BannerSlider'
import Recomended from '../components/Recomended'
import LiveEvents from '../components/LiveEvents'

const Home = () => {
  return (
    <div>
    <BannerSlider />
    <Recomended />
    <LiveEvents />
    </div>
  )
}

export default Home
