import React from 'react'

function TodoItem({ title, description, date }) {

  return (
    <div>
      <input type='checkbox'/>
      <h2>{title}</h2>
      <p>{description}</p>
      <span>{date}</span>
      <button>Редактировать</button>
      <button>Удалить</button>
    </div>
  )
}

export default TodoItem;
