import React from 'react'
import { APP_LOGO } from '../Utils/Constant'

function Header() {
  return (
    <div className='flex items-center p-2 border shadow-lg'>
        <img className='h-14 w-14' src={APP_LOGO} alt='App logo'></img>
        <h1 className='font-bold m-2'>DoorDash</h1>
        <div className='flex justify-center w-full'>
            <ul  className='flex space-x-20'>
                <li>🔍 Search </li>
                <li>Offers </li>
                <li>Help</li>
                <li>🛒 Cart </li>
            </ul>
        </div>
        
    </div>
  )
}

export default Header
