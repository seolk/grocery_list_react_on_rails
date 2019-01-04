import React, { Fragment} from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NoMatch from './components/NoMatch';
import Nav from './components/Nav';
import Item from './components/Item';
import Lists from './components/Lists';
import List from  './components/List';

const App = () => (
  <Fragment>
    <Nav />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/items/:id' component={Item} />
      <Route exact path='/lists' component={Lists} />
      <Route exact path='/lists/:id' component={List} />
      <Route component={NoMatch} />
    </Switch>
  </Fragment>
)

export default App;