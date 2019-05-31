import React, { Component } from 'react'
import { connect } from 'react-redux'
import ItemHandler from '../DBHandlers/itemHandler'
import { addItem, updateItemInClient } from '../reduxEls/actions/itemActions'
import uuid from 'uuid'

class ItemForm extends Component {
  state = {
    title: ''
  }

  onChange = (e) => {
    this.setState({
      title: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    const tempItem = {
      tempId: uuid(),
      title: this.state.title,
      isTemp: true
    }
    // add in client, make it in opacity 0.5
    this.props.dispatch(addItem(tempItem))
    // async server
    ItemHandler.addItem(tempItem, (resItem) => {
      this.props.dispatch(updateItemInClient(tempItem, resItem))
    })

  }

  render() {
    return (
      <div className="todo-form">
        <h2>Create new shopping item</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <input name="title" id="todoTitle" placeholder="Title" type="text" className="form-control"
              value={this.state.title}
              onChange={this.onChange}
            />
          </div>
          <button className="submit-button btn btn-secondary">Submit new todo item</button>
        </form>
      </div>
    )
  }
}

export default connect()(ItemForm)
