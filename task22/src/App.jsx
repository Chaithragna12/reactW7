import React, {useState} from 'react'
import styles from './ToggleSwitch.Module.css'

export default function App ()  {
  const[ison,setison]=useState(false);
  const handle=()=>{
    setison(previndex=>!previndex);
  }
  return (
    <div className={`${styles.toggle} ${ison?styles.on:styles.off}`} onClick={handle}>
      <div className={styles.slider}></div>
    </div>
  )
}


