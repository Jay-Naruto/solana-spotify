import React, { useState } from 'react'
   
import Nav from '../components/nav'
import Activity from '../components/activity'
import Header from '../components/Header'
import { useSpotify } from '../components/useSpotify'
import Upload from '../components/Upload'
import UploadModal from '../components/UploadModal'
import Playlist from '../components/Playlist'

export default function Homepage() {
  const [showUploadMusic,setShowUploadMusic]=useState(false)
  const [title,setTitle]=useState('')
  const [musicUrl,setMusicUrl]=useState('')
  const [songs,setSongs]=useState([])
const {newMusic,getSongs}=useSpotify( musicUrl,
  title,
  setTitle,
  setMusicUrl,
  setShowUploadMusic)
  return (

    <div className='flex'>
      <Nav />
      <div className='w-full'>
        <Header setShowUploadMusic={setShowUploadMusic}/>
        <Playlist/>
        {showUploadMusic && (
        <UploadModal
        title={title}
        setTitle={setTitle}
        setShowUploadMusic={setShowUploadMusic}
        musicUrl={musicUrl}
        setMusicUrl={setMusicUrl}
        newMusic={newMusic}

        />
        )}
      </div>
      <Activity />
    </div>
  )
}
