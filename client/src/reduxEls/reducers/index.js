import itemReducer from './itemReducer'
import filterReducer from './filterReducer'

const rootReducer = (bigState = {}, action) => ({
  items: itemReducer(bigState.items, action, bigState.filter),
  filter: filterReducer(bigState.filter, action)
})

export default rootReducer