import Login from '../components/Login'
import Homepage from './Homepage'
import Random from './random'


export default function Home() {
  return (
    <div>
      <audio
        id='audio-element'
        hidden
        playsInline
        onVolumeChange={e => updateVolume(e)}
        onTimeUpdate={e => updateProgress(e)}
      />
      <Homepage />
    </div>
  )
}
