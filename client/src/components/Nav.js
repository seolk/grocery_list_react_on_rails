import React from 'react';
import { NavLink } from 'react-router-dom';
import { Header, Segment, Icon, Divider } from 'semantic-ui-react';

const Nav = () => (
    <Segment basic textAlign='center'>
    <Header as='h1' textAlign='center' color='olive'><Icon name='shop' />Grocery Store</Header>
      <nav>
        <NavLink activeStyle={styles.active} exact to='/'>Home</NavLink>
        {' '}
        <NavLink activeStyle={styles.active} exact to='/about'>About</NavLink>
        {' '}
        <NavLink activeStyle={styles.active} exact to='/lists'>Department</NavLink>
      </nav>  
      <Divider />
    </Segment>
)

const styles = {
  active: {
    textDecoration: 'underline',
    fontWeight: 'bold',
    color: 'black',
  }
}

export default Nav;