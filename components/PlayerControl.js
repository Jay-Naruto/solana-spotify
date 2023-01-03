import React from 'react'

const styles={
    albumCoverContainer:'w-20 h-20 mr-3',
    mainControl:'fixed bottom-0 left-0 py-3 p-5 pr-10 w-screen bg-[242424] z-40 flex items-center justify-between',
    flexCenter:'flex items-center',
    controlIcon:'mr-5 cursor-pointer hover:opacity-100 opacity-50',
    controlIconContainer:'flex items-center justify-center mb-2',
    playIcon:'mr-5 w-10 cursor-pointer hover:opacity-50',
    pauseIcon:''
}
export default function PlayerControl() {
  return (
    <div className={styles.mainControl}>
        <div className={styles.flexCenter} >
            <div className={styles.albumCoverContainer}>
                <img
                src=''
                height={200}
                width={200}

                />
            </div>
            <div>
                <p>Current Song</p>
                <p className='opacity-50' >artist</p>
            </div>

        </div>
        <div className={styles.controlIconContainer} >
         <div className={styles.controlIcon}>
<img src='/assets/shuffle.svg'/>
         </div>
         <div className={styles.controlIcon}>
<img src='/assets/previous.svg'/>
         </div>
         <div className={styles.controlIcon}>
<img src='/assets/next.svg'/>
         </div>
         <div className={styles.controlIcon}>
<img src='/assets/repeat.svg'/>
         </div>
        </div>

        <div className={styles.flexCenter} >
            <small>1:30</small>
            <input
            type="range"
            className={styles.range}
            />
            <small>2:45</small>


        </div>
        
    </div>
   
  )
}
