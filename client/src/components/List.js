import React, { Component } from 'react';
import axios from 'axios';
import ListForm from './ListForm';
import { Link } from 'react-router-dom';
import ItemForm from './ItemForm';

class List extends Component {
  state = { list: {}, items: [], edit: false, showForm: false }

  componentDidMount(list, items) {
    axios.get(`/api/lists/${this.props.match.params.id}`, { list })
      .then( res => {
        this.setState({ list: res.data })
      })
    axios.get(`/api/lists/${this.props.match.params.id}/items`, { items })
      .then( res => {
        this.setState({ items: res.data })
      })
  }

  toggleEdit = () => {
    this.setState( state => {
      return { edit: !this.state.edit }
    })
  }

  showList = () => {
    const { list: {name} } = this.state
    return (
      <div>
        <h1>{name}</h1>
      </div>
    )
  }

  edit = () => {
    return <ListForm {...this.state.list} submit={this.submit} />
  }

  submit = (list) => {
    axios.put(`/api/lists/${this.props.match.params.id}`, { list })
      .then( res => {
        this.setState({ list: res.data, edit: false })
      })
  }

  addItem = (name, price) => {
    axios.post(`/api/lists/${this.props.match.params.id}/items`, { name, price })
      .then( res => {
        const { items } = this.state;
        this.setState({ items: [...items, res.data] })
    })
  }

  updateItem = (id) => {
    axios.put(`/api/items/${this.props.match.params.id}/items`)
      .then( res => {
        const items = this.state.items.map( t => {
        if (t.id === id)
          return res.data;
        return t;
      });
      this.setState({ items });
    })
  }

  deleteItem = (id) => {
    axios.delete(`/api/items/${this.props.match.params.id}/items`)
      .then( res => {
        const { items } = this.state;
        this.setState({ items: items.filter(t => t.id !== id) })
    })
  }
  
  listItems = () => {
    return this.state.items.map(x => {
      return(
        <List key={x.id}>
          <List.Item>
            <List.Icon name='right triangle' />
            <List.Content>
              <List.Header>
                <Link to={`/items/${x.id}`}>{x.name} - ${x.price}</Link>
              </List.Header>
            </List.Content>
          </List.Item>
        </List>
      )
    })
  }

  render() {
    const { edit, showForm } = this.state
    return(
      <div>
        { edit ? this.edit() : this.showList() }
        <button onClick={this.toggleEdit}>{ edit ? 'Cancel' : 'Edit Name' }</button>
      <br />
      <br />
        <h3>Items</h3>
        <ItemForm addItem={this.addItem} />
      </div>
    )
  }
}

export default List;