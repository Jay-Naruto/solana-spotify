import * as anchor from '@project-serum/anchor'
import { WalletNotConnectedError } from '@solana/wallet-adapter-base'
import  spotify  from './spotify.json'
import { PROGRAM_PUBKEY } from './constant'


export const getProgramInstance=(connection,wallet)=>
{
    if(!wallet.publicKey) throw new WalletNotConnectedError
    const provider = new anchor.Provider(connection, wallet, anchor.Provider.defaultOptions())
    const idl=spotify
    const programId= PROGRAM_PUBKEY
    const program=new anchor.Program(idl, programId, provider)
    return program
}