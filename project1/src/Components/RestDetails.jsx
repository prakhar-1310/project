import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const RestDetails = () => {
  let {id} = useParams();
  console.log(id, "id");

  const [allMenu,setAllMenu]= useState([]);

    useEffect(()=>{
        const API='https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.7596035&lng=83.38185130000001&restaurantId=305577&catalog_qa=undefined&submitAction=ENTER'
        async function calling(){
            let resp = await axios.get(API)
            //console.log(resp);
            
            //console.log(resp.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
            setAllRestaurants(resp.data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards);
        }
        calling()
    },[]);
    console.log(allMenu, "Menu");
    
  
  return (
    
    <div>RestDetails</div>
  )
}

export default RestDetails