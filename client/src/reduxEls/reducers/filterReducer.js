import { FETCH_ITEMS, FETCH_ITEMS_BOUGHT, FETCH_ITEMS_NOT_BOUGHT_YET } from '../actions/type'

const filterReducer = (smallState = FETCH_ITEMS, action) => {
  switch (action.type) {
    case FETCH_ITEMS:
      return FETCH_ITEMS
    case FETCH_ITEMS_BOUGHT:
      return FETCH_ITEMS_BOUGHT
    case FETCH_ITEMS_NOT_BOUGHT_YET:
      return FETCH_ITEMS_NOT_BOUGHT_YET
    default:
      return smallState
  }
}

export default filterReducer