import React, { useMemo } from 'react'
import {WalletAdapterNetwork} from "@solana/wallet-adapter-base"
import { clusterApiUrl } from '@solana/web3.js'
import {PhantomWalletAdapter}from "@solana/wallet-adapter-wallets"
import {ConnectionProvider, WalletProvider} from "@solana/wallet-adapter-react"
import {WalletModalProvider} from "@solana/wallet-adapter-react-ui"
export const WalletConnect=({children}) =>{
  const network= WalletAdapterNetwork.Devnet
  const endpoint=useMemo(()=>{
    if(network==WalletAdapterNetwork.Devnet)
    {
        return 'https://green-fittest-fog.solana-devnet.discover.quiknode.pro/e2efdca16d78b656246cc6f28a895cac67080470/'
    }
    return clusterApiUrl(network)
  },[network])

  const wallets=useMemo(()=>[new PhantomWalletAdapter()],[network])
  return (
   <>
   <ConnectionProvider endpoint={endpoint}>
    <WalletProvider wallets={wallets}>
<WalletModalProvider>{children}</WalletModalProvider>
    </WalletProvider>
   </ConnectionProvider>
   </>
  )

}
