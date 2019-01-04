import React, { Component } from 'react'
import { Button, Form } from "semantic-ui-react";

class ItemForm extends Component {
  defaultValues = { name: '', price: '' }
  state = {...this.defaultValues}

  componentDidMount() {
    if (this.props.id) {
      this.setState({...this.props})
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const item = { ...this.state }
    this.props.submit(item)
    this.setState({ ...this.defaultValues })
  }
  
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    const { name, price } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths='equal'>
          <Form.Input
            label="Enter Item"
            name='name'
            value = {name}
            required
            placeholder="Add Item"
            onChange={this.handleChange}
          />
          <Form.Input
            label="Enter Price"
            name='price'
            value = {price}
            required
            placeholder='0.00'
            onChange={this.handleChange}
          />
        </Form.Group>
        <Button size="small" type='submit' color='red'>Submit Item</Button>
      </Form>
    )
  }
}

export default ItemForm;