// import React from 'react'
// import * as anchor from '@project-serum/anchor'

// import { useEffect, useMemo, useState } from 'react'
// import { PublicKey, SystemProgram } from '@solana/web3.js'
// import { utf8 } from '@project-serum/anchor/dist/cjs/utils/bytes'
// import { findProgramAddressSync } from '@project-serum/anchor/dist/cjs/utils/pubkey'
// import { useAnchorWallet, useConnection, useWallet } from '@solana/wallet-adapter-react'
// import { getProgramInstance } from '../utils/utils'
// import Homepage from '../pages/Homepage'
// import { PROGRAM_PUBKEY } from '../utils/constant'

// const defaultAccounts={
  
// }
// export default function Payment() {
//     const { connection } = useConnection()
//     const wallet = useWallet()
//     const program = getProgramInstance(connection,wallet)

//     const [payer,setPayer]=useState([]
//         )
//         const [isPaid,setPaid]=useState(false)
//         const styles={
//             main:`w-screen h-screen bg-white text-black flex flex-col justify-center items-center`,
//             btn:`bg-[#22C55E] m3 text-white font-bold, py-4 px-7 rounded-full hover:opacity-70 transition`,
//             text:`text-4xL mb-10`,
//             btns:`flex items-center`
//         }

//         const getAllWallets=async()=>{
//             const payerlist=await program.account.payerAccount.all()
//             setPayer(payerlist)
//             payerlist.forEach(payer=>{
//                 if (payer.account.wallet.toBase58()==wallet.
//                 publicKey.toBase58()) setPaid(true)
//             })
//         }
// useEffect(()=>{
    

// if (wallet.connected){ 
//     getAllWallets()
// }

// },[wallet.connected,isPaid])



//         const payClicked = async() => {
     
//                if(program && wallet.publicKey)
//                 {
//                     try{
                       
//                         const [payerSigner,profileBump]=await findProgramAddressSync([utf8.encode('payer'),wallet.publicKey.toBuffer()],program.programId)
                       
//                             await program.methods.acceptPayment()
//                         .accounts({
//                             payerWallet:payerSigner,
//                             receiver:new PublicKey("EECkxw2mV8ipjaBh5F2aeJHj9K5FJyDYaJLmVot8FdFb"),
//                             authority:wallet.publicKey,
//                             systemProgram:SystemProgram.programId,
//                             clock:anchor.web3.SYSVAR_CLOCK_PUBKEY,
//                         })
//                         .rpc()
//                         alert("Transaction done!")
                 
                        
        
//                     }
//                     catch(e)
//                     {
//                         console.log(e)
//                     }
                    
//                 }
//             }
//             if (isPaid) return <Homepage/>
//   return (
//     <div className={styles.main}>
//         <p className={styles.text}>
//             Make Payment
//         </p>
//         <div className={styles.btns}>
// <button className={styles.btn} onClick={()=>payClicked()}>
//     Pay 0.1 SOL
// </button >
// <button className={styles.btn} onClick={()=>getAllWallets()}>
//     Verify it
// </button>
//         </div>
//     </div>
//   )
// }
