import './App.css';
import React from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList'
import Popup from './components/Popup';

function App() {

  const [items, setItems] = React.useState([{ title: 'Почистить зубы', description: '', date: '11.12.13' }])
  const [popupOpen, setPopupOpen] = React.useState(false)

  return (
    <div className="App">
      <Header />
      <TodoList items={items} setItems={items}/>
      {popupOpen ? <Popup /> : ''}
    </div>
  );
}

export default App;
