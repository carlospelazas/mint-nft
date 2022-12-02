import React from 'react'
import Facebook from './assets/social-media-icons/facebook_32x32.png'
import Twitter from './assets/social-media-icons/twitter_32x32.png'
import Email from './assets/social-media-icons/email_32x32.png'

const NavBar = ({ accounts, setAccounts }) => {
  const isConnected = Boolean(accounts[0])

  async function connectAccount() {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      })
      setAccounts(accounts)
    }
  }

  return (
    <div className="flex justify-between align-middle p-8">
      {/*Left Side - Social Media Icons*/}
      <div className="flex space-x-14 pl-4 lg:pl-10">
        <a href="https://www.facebook.com">
          <img src={Facebook}></img>
        </a>
        <a href="https://www.twitter.com">
          <img src={Twitter}></img>
        </a>
        <a href="https://mail.google.com">
          <img src={Email}></img>
        </a>
      </div>

      {/*Right Side - Sections and Connect*/}
      <div className="flex">
        <div className="mr-6 my-auto">About</div>
        <div className="mr-6 my-auto">Mint</div>
        <div className="mr-6 my-auto">Team</div>

        {/*Connect*/}
        {isConnected ? (
          <p className="mr-6 my-auto">Connected!</p>
        ) : (
          <button
            onClick={connectAccount}
            className="text-white bg-blue-700
              hover:bg-blue-800 focus:ring-4
              focus:ring-blue-300 font-medium
              rounded-lg text-sm px-5 py-2.5 mr-2
              mb-2 dark:bg-blue-600 dark:hover:bg-blue-700
              focus:outline-none dark:focus:ring-blue-800 my-auto"
          >
            Connect
          </button>
        )}
      </div>
    </div>
  )
}

export default NavBar
