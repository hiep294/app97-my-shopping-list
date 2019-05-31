import { ADD_ITEM, TOGGLE_ITEM, UPDATE_ITEM_TITLE, FETCH_ITEMS, FETCH_ITEMS_NOT_BOUGHT_YET, FETCH_ITEMS_BOUGHT, DELETE_ITEM, UPDATE_ITEM_IN_CLIENT } from '../actions/type'

const itemReducer = (smallState = [], action, filter) => {
  switch (action.type) {
    case ADD_ITEM:
      if (filter === FETCH_ITEMS_BOUGHT) return smallState
      return [action.payload, ...smallState]
    case FETCH_ITEMS:
    case FETCH_ITEMS_BOUGHT:
    case FETCH_ITEMS_NOT_BOUGHT_YET:
      return action.payload
    case TOGGLE_ITEM:
      return smallState.map(item => {
        if (item._id === action.payload) {
          item.isBought = !item.isBought
        }
        return item
      })
    case UPDATE_ITEM_TITLE:
      return smallState.map(item => {
        if (item._id === action.payload._id) {
          item.title = action.payload.newTitle
        }
        return item
      })
    case DELETE_ITEM:
      return smallState.filter(item => item._id !== action.payload)
    case UPDATE_ITEM_IN_CLIENT:
      return smallState.map(item => {
        if (item._id === action.payload.tempItem.tempid) {
          item = action.payload.resItem
        }
        return item
      })
    default:
      return smallState
  }
}

export default itemReducer