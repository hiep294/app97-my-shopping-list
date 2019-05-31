import React from 'react';
import ItemForm from './components/ItemForm'
import Items from './components/Items'
import Filters from './components/Filters'
import checkedIcon from './icons/checked.png'
import { connect } from 'react-redux'
import { FETCH_ITEMS } from './reduxEls/actions/type'

class App extends React.Component {
  render() {
    const { items, filter } = this.props
    let check = 1
    if (filter === FETCH_ITEMS) {
      check = 0
      if (items.length) {
        for (var i = 0; i < items.length; i++) {
          if (!items[i].isBought) {
            check++
          }
        }
      } else {
        check = 1
      }

    }




    return (
      <div className="App" style={{ minHeight: '900px' }}>
        <div className="container">
          <h2 className="todos-title">
            Shopping List
            {!check ? (
              <img src={checkedIcon}
                alt=""
                style={{ position: 'absolute', marginLeft: '15px', width: '40px', height: '40px', marginTop: '-4px' }}
              />
            ) : null}

          </h2>
          <div className="filter" style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <Filters />
            </div>
            <a className="nav-link" href="https://github.com/hiep294/app98-my-todo-list">Github</a>
          </div>
          <hr />
          <div className="row">
            <div className="col">
              <div className="todos-container">
                <Items />
              </div>
            </div>
            <div className="col">
              <ItemForm />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (bigState) => ({
  items: bigState.items,
  filter: bigState.filter
})

export default connect(mapStateToProps)(App);
