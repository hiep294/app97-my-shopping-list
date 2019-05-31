
export default class ItemHandler {
  static addItem = (item, clientHandler) => {
    fetch('/api/items', {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(item), // data can be `string` or {object}!
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(item => clientHandler(item))
      .catch(errs => console.log(errs))
  }

  static toggleItem = (_id, clientHandler) => {
    fetch(`/api/items/${_id}`, {
      method: 'PUT', // or 'PUT'
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          clientHandler()
        }
      })
      .catch(errs => console.log(errs))
  }

  static updateItemTitle = (_id, title, clientHandler) => {
    fetch(`/api/items/${_id}/${title}`, {
      method: 'PATCH'
    })
      .then(res => res.json())
      .then(data => {
        if (!data.success) {
          clientHandler()
        }
      })
      .catch(errs => clientHandler())
  }

  static fetchItemsForm = (url, clientHandler) => {
    fetch(url, {
      method: 'GET'
    })
      .then(res => res.json())
      .then(items => {
        clientHandler(items)
      })
      .catch(errs => console.log(errs))
  }

  static fetchItems = (clientHandler) => {
    ItemHandler.fetchItemsForm('/api/items', clientHandler)
  }

  static fetchItemsNotBoughtYet = (clientHandler) => {
    ItemHandler.fetchItemsForm('/api/items/not-bought-yet', clientHandler)
  }

  static fetchItemsBought = (clientHandler) => {
    ItemHandler.fetchItemsForm('/api/items/bought', clientHandler)
  }



  static deleteItem = (_id, clientHandler) => {
    fetch(`/api/items/${_id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(ob => {
        if (ob.success) {
          clientHandler()
        }
      })
      .catch(errs => console.log(errs))
  }
}