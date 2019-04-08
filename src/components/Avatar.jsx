import React from 'react';

const Avatar =({img='', width= 60, height = 60})=>(
    <img className='avatar' src={img} alt='user' width={width} height={height}  />
)

export default Avatar