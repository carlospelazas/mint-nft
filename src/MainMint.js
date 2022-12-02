import React from 'react'
import { useState } from 'react'
import { ethers, BigNumber } from 'ethers'
import roboPunksNFT from './RoboPunksNFT.json'

const roboPunksNFTAddress = '0xEfe64c2870CDF1a2AB46E36cdcF4F1164a7b4Cbd'

const MainMint = ({ accounts, setAccounts }) => {
  const [mintAmount, setMintAmount] = useState(1)
  const isConnected = Boolean(accounts[0])

  async function handleMint() {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      const contract = new ethers.Contract(
        roboPunksNFTAddress,
        roboPunksNFT.abi,
        signer,
      )
      try {
        const response = await contract.mint(BigNumber.from(mintAmount))
        console.log('response: ', response)
      } catch (err) {
        console.log('error ', err)
      }
    }
  }

  const handleDecrement = () => {
    if (mintAmount <= 1) return
    setMintAmount(mintAmount - 1)
  }
  const handleIncrement = () => {
    if (mintAmount >= 3) return
    setMintAmount(mintAmount + 1)
  }

  return (
    <div className="grid grid-cols-1 mt-24 space-y-5 pl-24 pr-24">
      <h1 className="font-bold text-5xl">RoboPunks</h1>
      <p>
        It's 2078. Can the RoboPunks NFT save humans from destructive rampant
        NFT speculation? Mint RoboPunks to find out.
      </p>
      {isConnected ? (
        <div>
          <div>
            <button
              onClick={handleDecrement}
              className="mr-4 border-b-4 border-l-2 bg-red-600 
              border-red-700 px-3 font-bold my-auto"
            >
              -
            </button>
            <input
              type="number"
              value={mintAmount}
              className="align-middle text-black"
            />
            <button
              onClick={handleIncrement}
              className="ml-4 border-b-4 border-l-2 bg-red-600 
              border-red-700 px-3 font-bold my-auto"
            >
              +
            </button>
          </div>
          <button
            onClick={handleMint}
            className="mt-5 rounded px-3 py-2 m-1 border-b-4 
            border-l-2 shadow-lg bg-blue-800 border-blue-900 
            text-white"
          >
            Mint Now
          </button>
        </div>
      ) : (
        <p>You must be connected to mint</p>
      )}
    </div>
  )
}

export default MainMint
