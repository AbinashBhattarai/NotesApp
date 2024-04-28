import { useContext, useState } from 'react';
import './Popup.css'
import { NotesContext } from '../App';

export default function Popup() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const {tooglePopup, addNotes} = useContext(NotesContext);

  const addNote = (e) => {
    e.preventDefault();
    if(title.length > 0 || body.length> 0){
      addNotes(crypto.randomUUID(), title, body);
      setTitle("");
      setBody("");
      tooglePopup();
    }
  };

  return(
    <div className='popup'>
      <div className='popup-overlay'></div>
      <div className='modal'>
        <form onSubmit={(e) => {addNote(e)}} className="popup-modal">
          <div className="popup-head">
            Add a new note
            <span onClick={tooglePopup}
              class="material-symbols-outlined">close
            </span>
          </div>
          <div className="popup-body">
            <div className="popup-title">
              <p>Title</p>
              <input 
                type="text" 
                value={title}
                onChange={(e) => {setTitle(e.target.value)}} />
            </div>
            <div className="popup-description">
              <p>Description</p>
              <textarea
                value={body}
                onChange={(e) => {setBody(e.target.value)}}>
              </textarea>
            </div>
          </div>
          <div className="popup-btn">
            <button type='submit'>
              Add Note
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}