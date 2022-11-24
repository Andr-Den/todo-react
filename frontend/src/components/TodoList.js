import React from 'react'
import TodoItem from './TodoItem'

function TodoList({items, onClick}) {

  function getId(item) {
    return item._id
  }

  return (
    items.map((item, index) => (
      <TodoItem title={item.title} description={item.description} date={item.date} key={index} getId={getId(item)} onClick={onClick}/>
    ))
  )
}

export default TodoList;
