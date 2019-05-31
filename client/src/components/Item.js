import React, { Component } from 'react'
import editIcon from '../icons/edit.png'
import saveIcon from '../icons/save.png'
import cancelIcon from '../icons/cancel.png'
import garbageIcon from '../icons/garbage.png'
import checkedIcon from '../icons/checked.png'


export default class Item extends Component {

  state = {
    _id: this.props.item._id,
    title: this.props.item.title,
    onSaving: false,
    onEdit: false
  }

  onEditTrue = () => {
    this.setState({
      onEdit: true
    })
  }

  onEditFalse = () => {
    this.setState({
      title: this.props.item.title,
      onEdit: false
    })
  }

  onChange = (e) => {
    this.setState({
      title: e.target.value
    })
  }

  onKeyUp = (e) => {
    if (e.keyCode === 13) this.onUpdateItemTitle()
  }

  onUpdateItemTitle = () => {
    if (this.state.onEdit) {
      const { _id, title } = this.state
      this.props.onUpdateItemTitle(_id, title)
      this.setState({
        onEdit: false
      })

    }
  }

  editForm = () => (
    <div>
      <input type="text" value={this.state.title}
        onChange={this.onChange}
        style={{ height: '22px', marginLeft: '-2px' }}
        onKeyUp={this.onKeyUp}
      />
    </div>
  )

  render() {
    const { item } = this.props
    const style = {
      marginRight: '5px',
      marginLeft: '5px',
      opacity: 'initial',
      transition: 'opacity 0.5s'
    }
    return (
      <div className={`todo-card card card-body temp${item._id}`} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', opacity: item.isTemp ? 0.5 : item.isBought ? 0.8 : 1, transition: 'opacity 0.5s' }}>

        {item.isBought ? (
          <img src={checkedIcon}
            alt=""
            style={{ position: 'absolute', marginLeft: '-30px', width: '24px', height: '24px' }}
          />
        ) : null}

        <div className="sth card-title">
          <div>
            {!this.state.onEdit ? (
              <div id={item._id} className={`${item.isBought}`} style={{ textDecoration: item.isBought ? 'line-through' : 'none', opacity: item.isBought ? 0.5 : 1, transition: 'opacity 0.5s' }}
                onClick={this.props.onToggle}
              >{item.title}
              </div>
            ) : <>{this.editForm()}</>}

          </div>
        </div>
        <div>
          <img src={saveIcon} alt=""
            style={{ ...style, opacity: this.state.onEdit ? 1 : 0.3 }}
            onClick={this.onUpdateItemTitle}
          />
          <img src={cancelIcon} alt=""
            style={{ ...style, opacity: this.state.onEdit ? 1 : 0.3 }}
            onClick={this.onEditFalse}
          />
          <img src={editIcon} alt=""
            style={{ ...style, opacity: this.state.onEdit ? 0.3 : 1 }}
            onClick={this.onEditTrue}
          />
          <img src={garbageIcon} alt="" style={style}
            name={item._id}
            onClick={this.props.onDeleteItem}
          />

        </div>
      </div>
    )
  }
}
