import React from 'react'

function Popup() {

  return (
      <div>
        <form>
          <fieldset>
            <h2>Новое дело</h2>
            <span>Заголовок</span>
            <input type="text"required/>
            <span>Описание</span>
            <input type="text" required/>
            <span>Дата</span>
            <input type="text" required/>
            <input type="submit" value="Создать" name="submit_button" />
          </fieldset> 
        </form>
      </div>
  )
}

export default Popup;
