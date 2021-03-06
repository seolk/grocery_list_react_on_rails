import React from 'react'
import { Header, Button, Icon, Checkbox } from 'semantic-ui-react';

const Item = ({ id, complete, name, price, updateItem, deleteItem }) => (
  <div style={styles.flex}>
    <div style={styles.flex}>
      <Checkbox
        defaultChecked={complete}
        onClick={() => updateItem(id)}
      />

      <div style={complete ? styles.complete : {} } className='center'>
        <Header style={{marginLeft: "15px"}}>{name} - ${price}</Header>
      </div>
    </div>

    <Button 
      icon
      color="red"
      size="tiny"
      onClick={() => deleteItem(id)}
      style={{marginLeft: "16px"}}
    >
      <Icon name="trash" />    
    </Button>
  </div>
)

const styles = {
  complete: {
    textDecoration: 'line-through',
    color: 'grey'
  },
  pointer: {
    cursor: 'pointer' 
  },
  flex: {
    display: "flex",
    alignItems: "center"
  },
}

export default Item;