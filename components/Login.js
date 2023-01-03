import { useWallet } from '@solana/wallet-adapter-react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import React from 'react'



export default function Login() {
    const wallet=useWallet()

    const styles={
        LoginPage:`w-screen h-screen bg-white flex justify-center`,
        text:`text-4xL text-black mb-10`
    }
  return (
    <div className={styles.LoginPage}>
        <p className={styles.text}>
            Login for access!
        </p>
        
        <WalletMultiButton style={{backgroundColor:'black'}}/>
    </div>
  )
} 
