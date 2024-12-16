import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className=' absolute bottom-0 w-full bg-gray-100 p-10'>
       <ul className='flex justify-end space-x-20 font-raleway font-bold '>
                <li><Link to = "/about-us">About Us</Link></li>
                <li>Teams</li>
                <li>Help & Support</li>
                <li className='flex flex-col'>Available in:
                <ul className='font-thin'>
                    <li>Mumbai</li>
                    <li>Pune</li>
                    <li>Delhi</li>
                    <li>Bangalore</li> 
                </ul>
                </li>

        </ul>
          
          
    </div>
  )
}

export default Footer
