import React from 'react'
import TodoItem from './TodoItem'

function TodoList({items}) {
  return (
    items.map(({title, description, date}, index) => (
      <TodoItem title={title} description={description} date={date} key={index}/>
    ))
  )
}

export default TodoList;
