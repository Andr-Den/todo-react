import './App.css';
import React from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList'
import Popup from './components/Popup';

import * as api from './utils/api';

function App() {

  const [items, setItems] = React.useState([])
  const [popupOpen, setPopupOpen] = React.useState(false)
  const [title, setTitle] = React.useState('')
  const [description, setDescription] = React.useState('')
  const [date, setDate] = React.useState('')

  function handleOpenPopup() {
    setPopupOpen(true)
  }

  function handleClosePopup() {
    setPopupOpen(false) 
  }

  function handleSubmit(e) {
    e.preventDefault()
    api.savePoint(title, description, date)
    .then((data) => {
      setItems([...items, data.data])})
      setPopupOpen(false)
  }

  function deleteItem(data) {
    api.deletePoint(data)
    .then(() => {
      setItems(items)
    })
  }

  React.useEffect(() => {
    api.getPoints()
    .then((res) => {
      setItems(res.data)
    })
  }, [items])

  return (
    <div className="App">
      <Header onClick={handleOpenPopup}/>
      <TodoList items={items} setItems={items} onClick={deleteItem}/>
      {popupOpen ? <Popup onClose={handleClosePopup} title={title} setTitle={setTitle} description={description} setDescription={setDescription}  date={date} setDate={setDate} onSubmit={handleSubmit}/> : ''}
    </div>
  );
}

export default App;
