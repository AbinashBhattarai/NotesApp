import { useState, createContext, useEffect } from 'react'
import './App.css'
import HomeCard from './components/HomeCard'
import Popup from './components/Popup'
import Card from './components/Card'

export const NotesContext = createContext();

function App() {
  const [popup, setPopup] = useState(false);
  const [notes, setNotes] = useState([]);

  const tooglePopup = () => {
    setPopup(!popup);
  };
  const addNotes = (id, title, body) => {
    console.log(notes);
    setNotes((prev) => [...prev, {id: `${id}`, title: `${title}`, body: `${body}`, date: new Date().toDateString(), isDisabled: true}])
    console.log(notes);
  }
  const editNotes = (id) => {
    setNotes((prev) => prev.map((prevNote) => prevNote.id === id ? {...prevNote, isDisabled: !prevNote.isDisabled} : prevNote))
  }
  const updateNotes = (id, title, body) => {
    setNotes((prev) => prev.map((prevNote) => prevNote.id === id ? {...prevNote, title: `${title}`, body: `${body}`, isDisabled: !prevNote.isDisabled} : prevNote))
  }
  const deleteNotes = (id) => {
    setNotes((prev) => prev.filter((prevNote) => prevNote.id !== id));
  }

  useEffect(() => {
    const localNotes = JSON.parse(localStorage.getItem("notes"));
    if(localNotes && localNotes.length > 0){
      setNotes(localNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <NotesContext.Provider value={{tooglePopup, addNotes, notes, editNotes, updateNotes, deleteNotes}}>
      <div className='container'>
        <div className='wrapper'>
          <HomeCard />
          <Card />
        </div>
        {popup && <Popup />}
      </div>
    </NotesContext.Provider>
  )
}

export default App
