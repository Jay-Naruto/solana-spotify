import React from 'react'
import Upload from './Upload'

const styles={
    header:'max-w-7xl m-auto p-3',
    headerWrapper:'flex items-center justify-between',
    arrowButton:'bg-black mr-2 w-10 h-10 flex items-center justify-center rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-75',
    headerRight:'flex',
    profile:'flex items-center bg-black rounded-full p-1 px-3 bg-opacity-50 cursor-pointer hover:bg-opacity-75',
    profileAvatarContainer:'w-7 h-7 rounded-full -ml-2 mr-3 flex items-center',
    iconContainer:'ml-10',
    title:'text-6xl font-extrabold',
    playlistTextContent:'flex items-end mt-10',
    playButton:'bg-green-500 w-16 h-16 pl-2 items-center justify-center rounded-full cursor-pointer'
}
export default function Header({setShowUploadMusic}) {
    console.log(setShowUploadMusic)
  return (
    <div className={styles.header}>
        <div className={styles.headerWrapper}>
          <div className='flex items-center'>
            <div className={styles.arrowButton}>
             <img src='/assets/chevronLeft.svg'
             width={20}
             height={20}
             />
            </div>
            <div className={styles.arrowButton}>
             <img src='/assets/chevronRight.svg'
             width={20}
             height={20}
             />
            </div>

          </div>
          <div className={styles.headerRight}>
            hjshhs
            <Upload setShowUploadMusic={setShowUploadMusic}/>
       
          <div className={styles.profile}>
            <div className={styles.profileAvatarContainer}>
                <img
                src='/assets/avatar.jpg'
                width={20}
                height={20}
                />

            </div>
            <p>Jay Mistry</p>

          </div>
          </div>
        </div>



        <div className={styles.controlsContainer}>
            <div className={styles.playButton}>
                <img
                src='/assets/play.svg'
                width={30}
                height={30}
                />

            </div>
            <div className={styles.iconContainer}>
                <img
                src='/assets/heart.svg'
                width={30}
                height={30}
                />

            </div>
            <div className={styles.iconContainer}>
                <img
                src='/assets/download.svg'
                width={30}
                height={30}
                />

            </div>

        </div>


        <div className={styles.playlistTextContent}>
            <img
            src=''
            width={200}
            height={200}
            />
            <div className='ml-5'>
                

            </div>

        </div>
        </div>
  )
}
