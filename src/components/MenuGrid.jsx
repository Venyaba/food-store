import React from 'react'
import MenuCard from './MenuCard'


const MenuGrid =({items,onShowMoreInfo})=>
    <ul className='menu__grid'>{items.map(item=>
    <li  key={item.id}>
        <MenuCard image={item.image}
                  name={item.name}
                  price={item.price}
                  category = {item.category}
                  onShowMoreInfo={()=>onShowMoreInfo(item.id)}
                  id={item.id}

        />
    </li>
    )}
    </ul>



export default MenuGrid;