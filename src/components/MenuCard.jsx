import React from 'react';
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router';

 const styles={
    fontStyle:'italic',
}
const MenuCard=({name,image,price,category ,onShowMoreInfo,id,match,location})=>(
<div className='menu__card'>
    <img src={image} alt={name} width={320} height={240}/>
    <h2>{name}</h2>
    <p style={styles}>{` category: ${category}`}</p>
    <span>{`${price} грн`}</span>
    <div className='menu__cardLink'>
        <Link to={{
            pathname:`${match.url}/${id}`,
            state:{from: location}
        }} onClick={()=>onShowMoreInfo()}>подробнее</Link>
    </div>
</div>
)

export default withRouter(MenuCard);