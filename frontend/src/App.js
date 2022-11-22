import './App.css';
import React from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList'
import Popup from './components/Popup';

function App() {

  const [items, setItems] = React.useState([{ title: 'Почистить зубы', description: '', date: '11.12.13' }])
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
    e.preventDefault();
      setPopupOpen(false)
      const item = {title: title, description: description, date: date}
      setItems([...items, item])
      setTitle()
      setDescription()
      setDate()
  }

  React.useEffect(() => {
    
  }, [items])

  return (
    <div className="App">
      <Header onClick={handleOpenPopup}/>
      <TodoList items={items} setItems={items} />
      {popupOpen ? <Popup onClose={handleClosePopup} title={title} setTitle={setTitle} description={description} setDescription={setDescription}  date={date} setDate={setDate} onSubmit={handleSubmit} items/> : ''}
    </div>
  );
}

export default App;
