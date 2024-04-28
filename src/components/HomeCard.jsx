import { useContext } from 'react'
import'./HomeCard.css'
import { NotesContext } from '../App'

export default function HomeCard() {
  const {tooglePopup} = useContext(NotesContext);

  return(
    <div className="home-card">
      <div onClick={tooglePopup}
        className="home-icon">
        <span
          class="material-symbols-outlined">
          add
        </span> 
      </div>
      <div className='home-text'>
        Add a new note
      </div>
    </div>
  )
}