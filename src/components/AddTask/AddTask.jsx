import React, {useState} from 'react'
import "./AddTask.css"

const AddTask = ({onAdd}) => {
    const [text, setText]= useState("");
    const [place, setPlace]= useState("");
    const [time, setTime]= useState("");
    const [reminder, setReminder]= useState("");


    const onSubmit= (e) => {
        e.preventDefault();

        if(!text && !place && !time ){
            alert("Please Enter Some Task")
            return
        }
        onAdd({text, place, time, reminder})

        setText("");
        setPlace("");
        setTime("");
        setReminder(false);

        e.target.reset();
    }

  return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className="form-control">
            <label htmlFor="Text">Text</label>
            <input type="text"  id="text" value = {text} onChange={(e) => setText(e.target.value)} placeholder='Add New Task'/>
        </div>
        <div className="form-control">
            <label htmlFor="place">Place</label>
            <input type="text"  id="place" value ={place} onChange={(e) => setPlace(e.target.value)} placeholder='Place'/>
        </div>
        <div className="form-control">
            <label htmlFor="Text">Time</label>
            <input type="time"  id="Time" value = {time} onChange={(e) => setTime(e.target.value)}  placeholder='Add Time'/>
        </div>
        <div className="form-control check-container">
            <label htmlFor="checkbox">Are You Sure</label>
            <input type="checkbox"  id="check" value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
        </div>
        <input type="submit" value="Save in Todo's" className='submitForm' />
        
    </form>
  )
}

export default AddTask