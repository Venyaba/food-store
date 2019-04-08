import React from 'react'


const CategorySelector = ({options, value, onChange, onClean}) => (
    <div className='filter__selector'>
        <div>
            <select
                value={value}
                onChange={e => onChange(e.target.value)}
            >
                {options.map(o => (
                    <option key={o.id} value={o.name}>
                        {o.name}
                    </option>
                ))}
            </select>
            {value && <button type='button' onClick={onClean}> Очистить фильтр</button>}

        </div>
        <p>{value && `Текущий фильтр: ${value}`}</p>
    </div>

)

export default CategorySelector;