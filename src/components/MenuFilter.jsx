import React from 'react';



const MenuFilter = ({value, onChange})=>(

<div className ='filter'>
    <input
        type='text'
        value={value}
        onChange={(e)=>onChange(e.target.value)}
        placeholder='поиск...'

    />

</div>
)

export default MenuFilter;