import React from 'react'
import Banner from '../components/Banner/Banner'
import HouseList from '../components/HouseList/HouseList'

function Home() {
  return (
    <div className='min-h-[1200px]'>
      <Banner/>
      <HouseList/>
    </div>
  )
}

export default Home