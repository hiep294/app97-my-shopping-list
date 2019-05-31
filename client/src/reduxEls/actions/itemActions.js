import { ADD_ITEM, TOGGLE_ITEM, UPDATE_ITEM_TITLE, FETCH_ITEMS, FETCH_ITEMS_NOT_BOUGHT_YET, FETCH_ITEMS_BOUGHT, DELETE_ITEM, UPDATE_ITEM_IN_CLIENT } from './type'

export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item
})

export const toggleItem = (_id) => ({
  type: TOGGLE_ITEM,
  payload: _id
})

export const updateItemTitle = (_id, newTitle) => ({
  type: UPDATE_ITEM_TITLE,
  payload: {
    _id: _id,
    newTitle: newTitle
  }
})

export const fetchItems = (items) => ({
  type: FETCH_ITEMS,
  payload: items
})
export const fetchItemsNotBoughtYet = (items) => ({
  type: FETCH_ITEMS_NOT_BOUGHT_YET,
  payload: items
})
export const fetchItemsBought = (items) => ({
  type: FETCH_ITEMS_BOUGHT,
  payload: items
})
export const deleteItem = (_id) => ({
  type: DELETE_ITEM,
  payload: _id
})

export const updateItemInClient = (tempItem, resItem) => ({
  type: UPDATE_ITEM_IN_CLIENT,
  payload: {
    tempItem: tempItem,
    resItem: resItem
  }
})