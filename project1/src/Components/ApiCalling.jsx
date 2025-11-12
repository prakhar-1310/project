import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';

const ApiCalling = () => {
  const [allRestaurants,setAllRestaurants]= useState([])

    useEffect(()=>{
        const API='https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.7237561&lng=83.3868665&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
        async function calling(){
            let resp = await axios.get(API)
            //console.log(resp);
            
            //console.log(resp.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
            setAllRestaurants(resp.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
        }
        calling()
    },[]);

  return allRestaurants;
}
export default ApiCalling