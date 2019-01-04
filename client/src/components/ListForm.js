import React, { Component } from 'react'

class ListForm extends Component {
  defaultValues = { name: '' }
  state = {...this.defaultValues}

  componentDidMount() {
    if (this.props.id) {
      this.setState({...this.props})
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const list = { ...this.state }
    this.props.submit(list)
    this.setState({ ...this.defaultValues })
  }

  handleChange = (e) => {
    const { target: { name, value }} = e;
    this.setState({ [name]: value })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={this.state.name}
          onChange={this.handleChange}
          required
        />
        <button>Submit</button>
      </form>
    )
  }
}

export default ListForm;