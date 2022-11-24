import React from 'react'

function TodoItem({ title, description, date, data, onClick, getId }) {

  function handleDeleteClick() {
    onClick(getId)
  }

  return (
    <div>
      <input type='checkbox'/>
      <h2>{title}</h2>
      <p>{description}</p>
      <span>{date}</span>
      <button>Редактировать</button>
      <button onClick={handleDeleteClick}>Удалить</button>
    </div>
  )
}

export default TodoItem;
