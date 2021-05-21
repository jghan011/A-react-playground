//  import { render } from '@testing-library/react';
import React from 'react';
import ShoppingItem from './ShoppingItem';

export default function ShoppingList(props) {
  ShoppingList.defaultProps = {
    items: []
  }
      return (
        
        <ul>
          {props.items.map((item, i) =>
            <ShoppingItem
              key={i}
              item={item}
              onDeleteItem={props.onDeleteItem}
              onCheckItem={props.onCheckItem}
            />
          )}
        </ul>
        
      )

    
   

  }






