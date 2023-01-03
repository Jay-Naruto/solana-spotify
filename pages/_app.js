import dynamic from 'next/dynamic'
import { WalletConnect } from '../context/Wallet'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return(
  <WalletConnect>
  <Component {...pageProps} />

  </WalletConnect>)
}

export default MyApp
