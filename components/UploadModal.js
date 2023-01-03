import React from 'react'
import styles from '../styles/UploadModal.module.css'


export default function UploadModal({
    musicUrl,
    title,
    setTitle,
    setMusicUrl,
    setShowUploadMusic,
    newMusic
}) {
  return (
    <div className={styles.wrapper}>
        <div className={styles.modalTitle}>
            Upload music
            <div className={styles.inputField} >
                <div className={styles.inputTitle} >Title

                </div>
                <div className={styles.inputContainer}>
                    <input
                    className={styles.input}
                    type="text"
                    value={title}
                    onChange={e=>setTitle(e.target.value)}
                    />

                </div>

            </div>
            <div className={styles.inputField} >
                <div className={styles.inputTitle} >Music

                </div>
                <div className={styles.inputContainer}>
                    <input
                    className={styles.input}
                    type="text"
                    value={musicUrl}
                    onChange={e=>setMusicUrl(e.target.value)}
                    />

                </div>

            </div>
            <div className={styles.modalButtons} >
               <button 
               className={`${styles.button} ${styles.cancelButton}`}
               
               onClick={()=>setShowUploadMusic(false)} >
                Cancel

               </button>
               <button onClick={newMusic}
               className={`${styles.button} ${styles.createButton}`}
               >
                Create New

               </button>
            </div>

        </div>
        
    </div>
  )
}
