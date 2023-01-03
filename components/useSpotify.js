import React from 'react'
import * as anchor from '@project-serum/anchor'

import { useEffect, useMemo, useState } from 'react'
import { PublicKey, SystemProgram } from '@solana/web3.js'
import { utf8 } from '@project-serum/anchor/dist/cjs/utils/bytes'
import { findProgramAddressSync } from '@project-serum/anchor/dist/cjs/utils/pubkey'
import { useAnchorWallet, useConnection, useWallet } from '@solana/wallet-adapter-react'
import { getProgramInstance } from '../utils/utils'
import Homepage from '../pages/Homepage'
import { PROGRAM_PUBKEY } from '../utils/constant'



const defaultAccounts={
  
}
export function useSpotify(
    musicUrl,
    title,
    setTitle,
    setMusicUrl,
    setShowUploadMusic
){
    const { connection } = useConnection()
    const anchorWallet = useAnchorWallet()
    const { publicKey } = useWallet()

    const wallet = useWallet()
    // const program = getProgramInstance(connection,wallet)
    const program = useMemo(() => {
        if (anchorWallet) {
            const provider = new anchor.AnchorProvider(connection, anchorWallet, anchor.AnchorProvider.defaultOptions())
            return new anchor.Program(todoIDL, PROGRAM_PUBKEY, provider)
        }
    }, [connection, anchorWallet])

    
        const getSongs=async()=>{
            const songs=await program.account.musicAccount.all()
            return songs
        }
    
        const newMusic=async()=>{
            const randomKey=anchor.web3.Keypair.generate().publicKey;
            let [music_pda]=await anchor.web3.PublicKey.findProgramAddress(
                [utf8.encode('music',randomKey.toBuffer())],
                program.programId
            )
    
            const tx=await program.rpc.createMusic(
    
            )
        }
   

    return {getSongs,newMusic}

}
