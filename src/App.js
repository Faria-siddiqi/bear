/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import AboutUs from './Screens/AboutUs/AboutUs';
import Heading from './Screens/Heading/Heading';
import Home from './Screens/Home/Home';
import Works from './Screens/Works/Works';
import Team from './Screens/Team/Team';
import RoadMap from './Screens/RoadMap/RoadMap';
import Line from './Screens/Line/Line';
import RightLine from './Screens/RightLine/RightLine';
import Partners from './Screens/Partners/Partners';
import Footer from './Screens/Footer/Footer';
import { connectWallet, getCurrentWalletConnected } from './Components/util/interact';
import { chainId, contractAddress } from './Components/constants/address';
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ethers } from 'ethers'

const App = () => {
  const [walletAddress, setWalletAddress] = useState(null);
  const [status, setStatus] = useState(null);
  const [ balance, setBalance ] = useState(0)
  
  let provider = new ethers.providers.Web3Provider(window.ethereum);
  const onClickConnectWallet = async () => {
    const walletResponse = await connectWallet();
    if(walletResponse) {
      await provider.getBalance(walletResponse.address).then((res) => {
        setBalance(ethers.utils.formatEther(res))
      })
      setStatus(walletResponse.status);
      setWalletAddress(walletResponse.address);
    } else {
      setBalance(0)
    }
  }

  const connectWalletPressed = async () => {
    const walletResponse = await connectWallet();
    if(walletResponse) {
      await provider.getBalance(walletResponse.address).then((res) => {
        setBalance(ethers.utils.formatEther(res))
      })
      setStatus(walletResponse.status);
      setWalletAddress(walletResponse.address);
    } else {
      setBalance(0)
    }
  };

  const onClickDisconnectWallet = async () => {
    setWalletAddress(null)
    setBalance(0)
    setStatus('😥 Connect your wallet account to the site.')
  }
  
  function addWalletListener() {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        console.log('accountchain')
        if (accounts.length > 0) {
          provider.getBalance(accounts[0].toLowerCase()).then(res => {
            console.log(ethers.utils.formatEther(res))
            setBalance(ethers.utils.formatEther(res))
          })
          setWalletAddress(accounts[0]);
          setStatus("👆🏽 You can mint new pack now.");
        } else {
          setBalance(0)
          setWalletAddress(null);
          setStatus("🦊 Connect to Metamask and choose the correct chain using the top right button.");
        }
      });
      window.ethereum.on("chainChanged", (chain) => {
        console.log('chainchange')
        connectWalletPressed()
        console.log(chain)
        if (chain !== chainId) {
          setBalance(0)
          setWalletAddress(null);
        }
      });
    } else {
      setStatus(
        <p>
          {" "}
          🦊{" "}
          {/* <a target="_blank" href={`https://metamask.io/download.html`}> */}
            You must install Metamask, a virtual Ethereum wallet, in your
            browser.(https://metamask.io/download.html)
          {/* </a> */}
        </p>
      );
    }
  }

  const notify = () => toast.info(status, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });

  useEffect(async () => {
    const { address, status } = await getCurrentWalletConnected()
    if (address) {
      await provider.getBalance(address).then((res) => {
        setBalance(ethers.utils.formatEther(res))
      })
      setWalletAddress(address)
      setStatus(status)
      addWalletListener()
    } else {
      setBalance(0)
    }
  }, [])

  useEffect(() => {
    if (status) {
      notify()
      setStatus(null)
    }
  }, [status])

  return (
    <Home>
      <div style={{background: 'rgba(0,0,0,0.2)'}}>
        <Heading  
          onClickConnectWallet={onClickConnectWallet}
          onClickDisconnectWallet={onClickDisconnectWallet}
          walletAddress={walletAddress}
        />
        <AboutUs />
        <Works
          balance={balance}
          walletAddress={walletAddress}
        />
        <Line />
        <Team />
        <RightLine />
        <RoadMap />
        <Line />
        <Partners />
        <Footer />
      </div>
      <ToastContainer />
    </Home>
  );
};

export default App;
