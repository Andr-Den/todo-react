import React from 'react'

function Popup({onClose, title, setTitle, description, setDescription, date, setDate, onSubmit }) {

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleDateChange(e) {
    setDate(e.target.value);
  }
  

  return (
      <div>
        <button onClick={onClose}>X</button>
        <form onSubmit={onSubmit}>
          <fieldset>
            <h2>Новое дело</h2>
            <span>Заголовок</span>
            <input type="text" onChange={handleTitleChange} required/>
            <span>Описание</span>
            <input type="text" onChange={handleDescriptionChange} required/>
            <span>Дата</span>
            <input type="text" onChange={handleDateChange} required/>
            <input type="submit" value="Создать" name="submit_button" />
          </fieldset> 
        </form>
      </div>
  )
}

export default Popup;
