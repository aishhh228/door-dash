import React , {useEffect}from 'react'
import {REGULAR_MENU } from '../Utils/Constant'


const Body = () => {

    useEffect(() =>{
        getResturantMenu()
       },[])
      const getResturantMenu = async () =>  {
        const reaturantData = await fetch(REGULAR_MENU);
        const response = await reaturantData.json();
        console.log("THis is the data",response.data)
      
      }
  return (
    <div>
      
    </div>
  )
}

export default Body
