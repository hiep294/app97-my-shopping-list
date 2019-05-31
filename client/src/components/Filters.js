import React, { Component } from 'react'
import { connect } from 'react-redux'
import Filter from './Filter'
import { FETCH_ITEMS, FETCH_ITEMS_NOT_BOUGHT_YET, FETCH_ITEMS_BOUGHT } from '../reduxEls/actions/type'
import ItemHandler from '../DBHandlers/itemHandler'
import { fetchItems, fetchItemsNotBoughtYet, fetchItemsBought } from '../reduxEls/actions/itemActions'

class Filters extends Component {
  state = {
    filters: [
      { id: 1, name: "All items", value: FETCH_ITEMS },
      { id: 2, name: "Not bought yet", value: FETCH_ITEMS_NOT_BOUGHT_YET },
      { id: 3, name: "Bought", value: FETCH_ITEMS_BOUGHT }
    ]
  }

  onFilter = (e) => {
    let work
    let action
    switch (e.target.value) {
      case FETCH_ITEMS:
        work = ItemHandler.fetchItems
        action = fetchItems
        break;
      case FETCH_ITEMS_NOT_BOUGHT_YET:
        work = ItemHandler.fetchItemsNotBoughtYet
        action = fetchItemsNotBoughtYet
        break;
      case FETCH_ITEMS_BOUGHT:
        work = ItemHandler.fetchItemsBought
        action = fetchItemsBought
        break;
      default:
        break;
    }

    work((items) => {
      this.props.dispatch(action(items))
    })
    this.props.dispatch(action([]))
  }

  render() {
    const filterRedux = this.props.filter
    return (
      <>
        {this.state.filters.map(filter => (
          <Filter key={filter.id} name={filter.name} value={filter.value} isChoosen={filterRedux === filter.value} onFilter={this.onFilter} />
        ))}
      </>
    )
  }
}

const mapStateToProps = bigState => ({
  filter: bigState.filter
})

export default connect(mapStateToProps)(Filters)