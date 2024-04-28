import { useContext, useState } from "react"
import './Card.css'
import { NotesContext } from "../App"


export default function Card() {
  const {notes, editNotes, updateNotes, deleteNotes} = useContext(NotesContext);
  const [editNoteTitle, setEditNoteTitle] = useState("");
  const [editNoteBody, setEditNoteBody] = useState("");


  const editNote = (id, title, body) => {
    setEditNoteTitle(title);
    setEditNoteBody(body);
    editNotes(id);
  }
  const update = (id) => {
    updateNotes(id, editNoteTitle, editNoteBody);
  }

  const deleteNote = (id) => {
    deleteNotes(id);
  }

  return(
    <div className="card-container">
      {notes && notes.map((note) => (
        <div key={note.id} className="card">
          <div className="content">
            <div className="content-head">
              <div className="content-title">
                <input onChange={(e) => {setEditNoteTitle(e.target.value)}}
                  style={!note.isDisabled ? {border: 1+'px solid black'} : {border: 'none'}}
                  disabled={note.isDisabled}
                  defaultValue={note.title} 
                  type="text"/>
              </div>
              <div className="content-body">
                <textarea onChange={(e) => {setEditNoteBody(e.target.value)}}
                  style={!note.isDisabled ? {border: 1+'px solid black'} : {border: 'none'}}
                  disabled={note.isDisabled}
                  defaultValue={note.body}>
                </textarea>
              </div>
            </div>
            <div className="content-action">
              <div className="content-date">
                {note.date}
              </div>
              <div className="content-span">
                {note.isDisabled ? 
                  (<span class="material-symbols-outlined">
                    more_horiz
                    <div className="content-action-icon">
                      <div onClick={() => {editNote(note.id, note.title, note.body)}}>
                        <span class="material-symbols-outlined">edit_note
                        </span>
                        Edit
                      </div>
                      <div onClick={() => {deleteNote(note.id)}}>
                        <span class="material-symbols-outlined">delete
                        </span>
                        Delete
                      </div>
                    </div>
                  </span>) 
                  :
                  (<span onClick={() => update(note.id)}
                    class="material-symbols-outlined save">
                    save
                  </span>)
                }
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}