import React from 'react'

export default function Filter(props) {
  const { name, isChoosen, onFilter, value } = props
  return (
    <button className="m-1 btn btn-secondary"
      style={isChoosen ? { opacity: 0.5, cursor: 'default' } : {}}
      value={value}
      onClick={(e) => onFilter(e)}
    >{name}</button>
  )
}
