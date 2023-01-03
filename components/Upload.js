import React from 'react'

const styles={
    uploadButton:'bg-green-500 mr-10 px-3 py-1.5 cursor-pointer rounded-full hover:scale-95 transition '
}
export default function Upload({setShowUploadMusic}) {

    const uploadClicked=()=>{
        setShowUploadMusic(true)
    }
  return (
    <div>
        <div onClick={()=>setShowUploadMusic(true)} className={styles.uploadButton} >
      Upload
        </div>
    </div>
  )
}
