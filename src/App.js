import { useState } from 'react';
import './App.css';
import Modal from './Modal';

function App() {
  // const [name ,setName]=useState('')
  const [modal,setModal]=useState(false)
  const handleClick=()=>{
    setModal(true)

  }

  return (
    <div className="App">
      <button onClick={handleClick}>add user</button>
  {modal?    <Modal/>:''}
    </div>
  );
}

export default App;
