import './App.css';
import React from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList'
import Popup from './components/Popup';

function App() {

  const [items, setItems] = React.useState([{ title: 'Почистить зубы', description: '', date: '11.12.13' }])
  const [popupOpen, setPopupOpen] = React.useState(false)

  function handleOpenPopup() {
    setPopupOpen(true) 
  }

  function handleClosePopup() {
    setPopupOpen(false) 
  }

  React.useEffect(() => {
    
  }, [items])

  return (
    <div className="App">
      <Header onClick={handleOpenPopup}/>
      <TodoList items={items} setItems={items}/>
      {popupOpen ? <Popup onClose={handleClosePopup}/> : ''}
    </div>
  );
}

export default App;
