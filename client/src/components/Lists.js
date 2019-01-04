import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ListForm from './ListForm';
import { List } from 'semantic-ui-react';

class Lists extends Component {
  state = { lists: [], showForm: false }

  componentDidMount() {
    axios.get('/api/lists')
      .then( res => {
        this.setState({ lists: res.data })
      })
  }

  toggleForm = () => {
    this.setState( state => {
      return { showForm: !state.showForm }
    }) 
  }

  form = () => {
    return <ListForm submit={this.submit} />
  }

  submit = (list) => {
    axios.post('/api/lists', { list })
      .then( res => {
        this.setState({ lists: [res.data, ...this.state.lists], showForm: false })
      })
  }

  listLists = () => {
    return this.state.lists.map(y => {
      return(
        <List key={y.id}>
          <List.Item>
            <List.Icon name='right triangle' />
            <List.Content>
              <List.Header>
                <Link to={`/lists/${y.id}`}>{y.name}</Link>
              </List.Header>
                <p>Click for <b>{y.name}</b> department.</p>  
            </List.Content>
          </List.Item>
        </List>
      )
    })
  }

  render() {
    const { showForm } = this.state
    return (
      <div>
        <h2>Departments</h2>
        <button onClick={this.toggleForm}>{ showForm ? 'Cancel' : 'Add new department' }</button>
        { showForm ? this.form() : this.listLists() }
      </div>
    )
  }

}

export default Lists;
