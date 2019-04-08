import React from 'react';
import style from '../services/style.css'
import {Link} from "react-router-dom";
import {withRouter} from "react-router";


const  OrderHistory =({items,onDelete,onShowMoreInfo,match,location})=>(
    <table style={style}>
             <thead>
             <tr>
             <th>Date</th>
             <th>Price</th>
             <th>Delivery Address</th>
             <th>Rating</th>
                 <th>--</th>
                 <th>--</th>

             </tr>
             </thead>
            <tbody>
            { items.map(item => (
                <tr key={item.id}>
                    <td>{item.date}</td>
                    <td>{item.price}</td>
                    <td>{item.address}</td>
                    <td>{`${item.rating}/10`}</td>
                    <td><a onClick={()=>onDelete(item.id)}>удалить</a></td>
                    <td><Link to={{
                        pathname:`${match.url}/${item.id}`,
                        state:{from: location}
                    }} onClick={()=>onShowMoreInfo(item.id)}>подробнее</Link></td>
                </tr>
                )

            )}
            </tbody>
        </table>

)

export default withRouter(OrderHistory);