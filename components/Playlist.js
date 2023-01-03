import React from 'react'
import TableRow from './TableRow'
import songs from '../data/songs.js'
const styles={
    tableWrapper:'max-w-7xl m-auto p-3 mt-5 mb-40',
    table:'w-full text-left',
    tableHeader:'border-b border-gray-100/20 pb-5 opacity-50'
}
export default function Playlist() {
    const songs = [
        {
          index: 1,
          title: 'Path Less Traveled',
          artiste: 'Lo-Fi',
          plays: '20,382',
          songLength: '2:43',
          album: 'Songs & Beats',
          cover:
            'https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png',
          link: 'https://res.cloudinary.com/dgjl7f1o0/video/upload/v1653077699/spotify-clone/Copy_of_1._Harris_Heller_-_Path_Less_Traveled_hlxpnf.mp3',
        },
        {
          index: 2,
          title: 'Radiant Vibes',
          artiste: 'SteamBeats originals',
          plays: '1,324',
          songLength: '4:50',
          album: 'The Random House',
          cover:
            'https://upload.wikimedia.org/wikipedia/commons/3/3b/Javascript_Logo.png',
          link: 'https://res.cloudinary.com/dgjl7f1o0/video/upload/v1653077728/spotify-clone/Copy_of_2._Harris_Heller_-_Radiant_Vibes_b62ofa.mp3',
        },
      ]
      
  return (
    <div className={styles.tableWrapper}>
        <table className={styles.table}>
            <tbody className={styles.tableHeader}>
                <tr>
                <th className='pb-3'>#</th>
                    <th className='pb-3'>TITLE</th>

                    <th className='pb-3'>PLAYS</th>
                    <th className='pb-3'>LENGTH</th>

              

                </tr>
            </tbody>
            <tbody className='mb-6 block'>

            </tbody>

         {
            songs.map((song)=>(
                <>
            <TableRow  song={song}/>

                </>
            ))
         }
        </table>
        
    </div>
  )
}
