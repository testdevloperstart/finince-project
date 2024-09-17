import React from 'react'
import Navbar from '../components/Navbar'
import Pay from '../components/pay'
import AccountBalance from '../components/AccountBalance'
function DailyPigmy() {
  return (
    <div className='mt-20'>
      {/* <Navbar/> */}
     
      <Pay/>
      <AccountBalance/>
    </div>
  )
}

export default DailyPigmy

