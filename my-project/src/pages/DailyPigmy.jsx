import React from 'react'
import Navbar from '../components/Navbar'
import Pay from '../components/pay'
import AccountBalance from '../components/AccountBalance'
import AccountStatement from '../components/AccountStatement'
function DailyPigmy() {
  return (
    <div className='mt-20'>
      {/* <Navbar/> */}
     
      <Pay/>
      <AccountBalance/>
      <AccountStatement/>
    </div>
  )
}

export default DailyPigmy

