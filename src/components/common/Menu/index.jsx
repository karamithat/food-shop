import React, { forwardRef } from 'react';
import MenuItem from './MenuItem';
import './styles.css';

const Menu = forwardRef(({list},ref) => (
  <main ref={ref}>
  {list.map((item,key) => (
    <MenuItem item={item} key={key}/>
    
  ))}

  </main>
)
);

export default Menu;
