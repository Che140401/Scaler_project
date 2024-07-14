import React from 'react'

import Fruit from './Fruit'

function Fruits() {

    let fruits=[
        {name:"apple",price:122},
        {name:"bannana",price:100},
        {name:"pear",price:133},
    ];

  return (
    <div>
        {fruits.map(f => (
            <Fruit key={f.name} name={f.name} price={f.price} />
        ))}
    </div>

  )
}

export default Fruits;
