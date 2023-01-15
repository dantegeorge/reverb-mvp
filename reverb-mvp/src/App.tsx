import React from "react";
import { useEffect, useState, useRef } from "react";
import { Web3Auth } from "@web3auth/web3auth";
import {
  WALLET_ADAPTERS,
  CHAIN_NAMESPACES,
  SafeEventEmitterProvider,
} from "@web3auth/base";
import { OpenloginAdapter } from "@web3auth/openlogin-adapter";
import RPC from "./web3RPC";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Buttons from "./pages/buttons";
import Rights from "./pages/rights";
import MusicControls from "./components/MusicControls";
import Explore from "./pages/explore";


const clientId = "BMTellqh0ado6Yv2f9RMk9dbPzNxzPXElOyV8mkwT4VOwzj"; // get from https://dashboard.web3auth.io

function App() {
  const [web3auth, setWeb3auth] = useState<Web3Auth | null>(null);
  const [provider, setProvider] = useState<SafeEventEmitterProvider | null>(
    null
  );

  //for music controls
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [songData, setSongs] = useState([]);
  const [songHashes, setHashes] = useState([]);

  useEffect(() => {
    const init = async () => {
      try {
        const web3auth = new Web3Auth({
          clientId,
          chainConfig: {
            chainNamespace: CHAIN_NAMESPACES.EIP155,
            chainId: "0x1",
            rpcTarget: "https://rpc.ankr.com/eth", // This is the public RPC we have added, please pass on your own endpoint while creating an app
          },
          uiConfig: {
            theme: "dark",
            loginMethodsOrder: [
              "google",
              "apple",
              "twitter",
              "facebook",
              "wechat",
            ],
            appLogo: "", // Your App Logo Here
          },
        });

        const openloginAdapter = new OpenloginAdapter({
          adapterSettings: {
            clientId,
            network: "testnet",
            uxMode: "popup",
            whiteLabel: {
              name: "Reverb",
              logoLight: "",
              logoDark: "",
              defaultLanguage: "en",
              dark: true, // whether to enable dark mode. defaultValue: false
            },
          },
        });
        web3auth.configureAdapter(openloginAdapter);
        setWeb3auth(web3auth);

        await web3auth.initModal({
          modalConfig: {
            [WALLET_ADAPTERS.OPENLOGIN]: {
              label: "openlogin",
              loginMethods: {
                discord: {
                  showOnModal: false,
                  name: "discord",
                },
                twitch: {
                  showOnModal: false,
                  name: "twitch",
                },
                github: {
                  showOnModal: false,
                  name: "github",
                },
                weibo: {
                  showOnModal: false,
                  name: "weibo",
                },
                linkedin: {
                  showOnModal: false,
                  name: "linkedin",
                },
                reddit: {
                  showOnModal: false,
                  name: "reddit",
                },
                kakao: {
                  showOnModal: false,
                  name: "kakao",
                },
                line: {
                  showOnModal: false,
                  name: "line",
                },
              },
            },
          },
        });
        if (web3auth.provider) {
          setProvider(web3auth.provider);
        }
      } catch (error) {
        console.error(error);
      }
    };

    init();
  }, [setProvider, setWeb3auth]);

  const login = async () => {
    if (!web3auth) {
      console.log("web3auth not initialized yet");
      return;
    }
    const web3authProvider = await web3auth.connect();
    setProvider(web3authProvider);
  };

  const getUserInfo = async () => {
    if (!web3auth) {
      console.log("web3auth not initialized yet");
      return;
    }
    const user = await web3auth.getUserInfo();
    console.log(user);
  };

  const logout = async () => {
    if (!web3auth) {
      console.log("web3auth not initialized yet");
      return;
    }
    await web3auth.logout();
    setProvider(null);
  };

  const getChainId = async () => {
    if (!provider) {
      console.log("provider not initialized yet");
      return;
    }
    const rpc = new RPC(provider);
    const chainId = await rpc.getChainId();
    console.log(chainId);
  };
  const getAccounts = async () => {
    if (!provider) {
      console.log("provider not initialized yet");
      return;
    }
    const rpc = new RPC(provider);
    const address = await rpc.getAccounts();
    console.log(address);
  };

  const getBalance = async () => {
    if (!provider) {
      console.log("provider not initialized yet");
      return;
    }
    const rpc = new RPC(provider);
    const balance = await rpc.getBalance();
    console.log(balance);
  };

  const sendTransaction = async () => {
    if (!provider) {
      console.log("provider not initialized yet");
      return;
    }
    const rpc = new RPC(provider);
    const receipt = await rpc.sendTransaction();
    console.log(receipt);
  };

  const signMessage = async () => {
    if (!provider) {
      console.log("provider not initialized yet");
      return;
    }
    const rpc = new RPC(provider);
    const signedMessage = await rpc.signMessage();
    console.log(signedMessage);
  };

  const getPrivateKey = async () => {
    if (!provider) {
      console.log("provider not initialized yet");
      return;
    }
    const rpc = new RPC(provider);
    const privateKey = await rpc.getPrivateKey();
    console.log(privateKey);
  };

  const loggedInView = (
    <>
      <Router>
        <MusicControls />
        <Navbar logout={logout} />
        <Routes>
          <Route path="/" element={<Explore />} />
          <Route
            path="/buttons"
            element={
              <Buttons
                getUserInfo={getUserInfo}
                getChainId={getChainId}
                getAccounts={getAccounts}
                getBalance={getBalance}
                sendTransaction={sendTransaction}
                signMessage={signMessage}
                getPrivateKey={getPrivateKey}
              />
            }
          />
          <Route path="/rights" element={<Rights />} />
        </Routes>
      </Router>
    </>
  );

  const unloggedInView = (
    <div className="main">
      <div className="loggedout-container">
        <h1 className="loggedout-container-title">Reverb</h1>
        <button onClick={login} className="loggedout-container-card">
          Login
        </button>
      </div>
    </div>
  );

  return (
    <body>
      <div>{provider ? loggedInView : unloggedInView}</div>
    </body>
  );
}

export default App;
