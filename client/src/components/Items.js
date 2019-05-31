import React, { Component } from 'react'
import Item from './Item'
import { connect } from 'react-redux'
import ItemHandler from '../DBHandlers/itemHandler'
import { fetchItems, toggleItem, updateItemTitle, deleteItem } from '../reduxEls/actions/itemActions'

class Items extends Component {

  componentWillMount() {
    ItemHandler.fetchItems((items) => {
      this.props.dispatch(fetchItems(items))
    })
  }

  onToggle = (e) => {
    const _id = e.target.id
    ItemHandler.toggleItem(_id, () => {
      this.props.dispatch(toggleItem(_id))
    })
    let ui = document.getElementsByClassName(`temp${_id}`)[0]
    ui.style.transition = 'opacity 0.5s'

    if (e.target.className === "false") {
      ui.style.opacity = '0.5'
    } else {
      ui.style.opacity = 1
      let textStyle = document.getElementById(`${_id}`)
      textStyle.style.transition = 'opacity 0.5s'
      textStyle.style.opacity = 1
    }
  }

  onUpdateItemTitle = (_id, title) => {
    this.props.dispatch(updateItemTitle(_id, title))

    ItemHandler.updateItemTitle(_id, title, () => {
      // setting errors
      let ui = document.getElementById(_id)
      ui.style.color = 'red'
    })
  }

  onDeleteItem = (e) => {
    const _id = e.target.name
    ItemHandler.deleteItem(_id, () => {
      this.props.dispatch(deleteItem(_id))
    })
    document.getElementsByClassName(`temp${_id}`)[0].style.opacity = '0.3'
  }

  render() {
    const { items } = this.props
    return (
      <>
        {items.map(item => (
          <Item key={item._id || item.tempId} item={item}
            onToggle={this.onToggle}
            onUpdateItemTitle={this.onUpdateItemTitle}
            onDeleteItem={this.onDeleteItem}
          />
        ))}

      </>
    )
  }
}

const mapStateToProps = bigState => ({
  items: bigState.items
})

export default connect(mapStateToProps)(Items)
