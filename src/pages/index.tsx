import type {GetStaticPropsContext, NextPage} from 'next';
import Head from 'next/head';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {useTranslation} from 'next-i18next';
import Header from './components/Header';
import Footer from './components/Footer';
import AvatarEditor from './components/AvatarEditor';
import {useCallback, useEffect, useState} from "react";
import {INFURA_ID, NETWORK, NETWORKS} from "./../const";
import obtainWeb3Modal from "./../web3Modal";
import Web3Modal from "web3modal";
import {useUserProviderAndSigner} from "./../useUserProviderAndSigner";
import {Button,Alert} from "antd";
import Transactor  from "./../Transactor";
import {useContractLoader, useGasPrice} from "eth-hooks";
import deployedContracts from "./../contracts/hardhat_contracts.json";
import externalContracts from "./../contracts/external_contracts";
import {NFTStorage} from "nft.storage";
import {blobToFile, dataURItoBlob} from "./../utils";
const {ethers} = require("ethers");

const client = new NFTStorage({ token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDk4YjFDRUJDMDc5Mzk4NWNGNzM2NzNiNDI1MTVlOTQ0NzM4MmM3RGYiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTYzNTQ1NjMxMDQ3NiwibmFtZSI6ImF2YXRhciJ9.Z6c19_0kTBDYYji-GrMZVAogvTgcXfYuUg7wVLolLvQ" })

const targetNetwork = NETWORKS.mumbai; // <------- select your target frontend network (localhost, rinkeby, xdai, mainnet)
// 😬 Sorry for all the console logging
const DEBUG = true;
const NETWORKCHECK = true;
const scaffoldEthProvider = new ethers.providers.StaticJsonRpcProvider("https://rpc.scaffoldeth.io:48544");
const poktMainnetProvider = new ethers.providers.StaticJsonRpcProvider(
  "https://eth-mainnet.gateway.pokt.network/v1/lb/611156b4a585a20035148406",
);
const mainnetInfura = new ethers.providers.StaticJsonRpcProvider("https://mainnet.infura.io/v3/" + INFURA_ID);


const localProviderUrl = targetNetwork.rpcUrl;
// as you deploy to other networks you can set REACT_APP_PROVIDER=https://dai.poa.network in packages/react-app/.env
const localProviderUrlFromEnv = localProviderUrl;
if (DEBUG) console.log("🏠 Connecting to provider:", localProviderUrlFromEnv);
let web3Modal: Web3Modal;
let localProvider = new ethers.providers.StaticJsonRpcProvider(localProviderUrlFromEnv);

const Home = () => {

  const mainnetProvider =
    poktMainnetProvider && poktMainnetProvider._isProvider
      ? poktMainnetProvider
      : scaffoldEthProvider && scaffoldEthProvider._network
      ? scaffoldEthProvider
      : mainnetInfura;

  const {t} = useTranslation(`common`);

  const [address, setAddress] = useState();
  const [injectedProvider, setInjectedProvider] = useState();

  const userProviderAndSigner = useUserProviderAndSigner(injectedProvider, localProvider);
  // @ts-ignore
  const userSigner = userProviderAndSigner.signer;
  const contractConfig = { deployedContracts: deployedContracts || {}, externalContracts: externalContracts || {} };
  const gasPrice = useGasPrice(targetNetwork, "fast");
  const transactor = Transactor(userSigner, gasPrice);
  // If you want to make 🔐 write transactions to your contracts, use the userSigner:
  // @ts-ignore
  const localChainId = localProvider && localProvider._network && localProvider._network.chainId;

  const selectedChainId =
    userSigner && userSigner.provider
    // @ts-ignore
    && userSigner.provider._network
    // @ts-ignore
    && userSigner.provider._network.chainId;
  console.log("localChainId:"+localChainId)
  console.log("_network:"+localProvider._network)



  const writeContracts = useContractLoader(userSigner, contractConfig, localChainId);
  // @ts-ignore
  useEffect(() => {
    async function getWalletAddress() {
      console.log(userSigner)
      if (userSigner) {
        // @ts-ignore
        const newAddress = await userSigner.getAddress();
        console.log(newAddress)
        // @ts-ignore
        setAddress(newAddress);
      }
    }

    getWalletAddress();
  }, [userSigner]);


  const logoutOfWeb3Modal = async () => {
    // @ts-ignore
    await web3Modal.clearCachedProvider();
    // @ts-ignore
    if (injectedProvider && injectedProvider.provider && typeof injectedProvider.provider.disconnect == "function") {
      // @ts-ignore
      await injectedProvider.provider.disconnect();
    }
    setTimeout(() => {
      window.location.reload();
    }, 1);
  };

  const loadWeb3Modal = useCallback(async () => {
    // await web3Modal.clearCachedProvider();
    const provider = await web3Modal.connect();
    const p = new ethers.providers.Web3Provider(provider)
    setInjectedProvider(p);

    provider.on("chainChanged", (chainId: any) => {
      console.log(`chain changed to ${chainId}! updating providers`);
      setInjectedProvider(new ethers.providers.Web3Provider(provider));
    });

    provider.on("accountsChanged", () => {
      console.log(`account changed!`);
      setInjectedProvider(new ethers.providers.Web3Provider(provider));
    });

    provider.on("disconnect", (code: any, reason: any) => {
      console.log(code, reason);
      logoutOfWeb3Modal();
    });

  }, [setInjectedProvider]);

  useEffect(() => {
    if (!web3Modal) {
      web3Modal = obtainWeb3Modal();
    }
    if (web3Modal.cachedProvider) {
      loadWeb3Modal();
    }
  }, [loadWeb3Modal]);

  let networkDisplay ;
  if (NETWORKCHECK && localChainId && selectedChainId && localChainId !== selectedChainId) {
    const networkSelected = NETWORK(selectedChainId);
    const networkLocal = NETWORK(localChainId);
    if (selectedChainId === 1337 && localChainId === 80001) {
      networkDisplay = (
        <div style={{ zIndex: 2, position: "absolute", right:130, top: 60, padding: 16 }}>
          <Alert
            message="Wrong Network ID"
            type="error"
            showIcon
            description={
              <div>
                You have <b>chain id 1337</b> for localhost and you need to change it to <b>31337</b> to work with
                HardHat.
                <div>(MetaMask -&gt; Settings -&gt; Networks -&gt; Chain ID -&gt; 31337)</div>
              </div>
            }
            closable={false}
          />
        </div>
      );
    } else {
      networkDisplay = (
        <div style={{ zIndex: 2, position: "absolute", top: 60,right:130}}>
          <Alert
            showIcon
            message="Wrong Network"
            type="error"
            description={
              <div>
                You have <b>{networkSelected && networkSelected.name}</b> selected and you need to be on {networkLocal.name}
              </div>
            }
            closable={false}
          />
        </div>
      );
    }
  } else {
    networkDisplay = (
      <div style={{ zIndex: 2, position: "absolute", top: 40,right:170, padding: 16, color: targetNetwork.color }}>
        {targetNetwork.name}
      </div>
    );
  }

  // @ts-ignore
  const mintingNFT = async (imageURL)=>{
    const file = blobToFile(dataURItoBlob(imageURL),`notion-avatar-${new Date().getTime()}.png`)
    const metadata = await client.store({
      name: `avatar`,
      description: 'Pin is not delicious beef!',
      image: file,
    })
    console.log(metadata)
    const URI = metadata.url
    // @ts-ignore
    const tx = await transactor(writeContracts.AvatarNFT.mint(address,URI), update => {
      console.log("📡 Transaction Update:", update);

      if (update && (update.status === "confirmed" || update.status === 1)) {
        console.log(" 🍾 Transaction " + update.hash + " finished!");
        console.log(
          " ⛽️ " +
          update.gasUsed +
          "/" +
          (update.gasLimit || update.gas) +
          " @ " +
          parseFloat(update.gasPrice) / 1000000000 +
          " gwei",
        );
      }
    });
    if(tx){
      const receipt = await tx.wait();
      let tokenId = null;
      for (const event of receipt.events) {
        if (event.event !== 'Transfer') {
          continue
        }
        tokenId = event.args.tokenId.toString();
        break;
      }
      console.log("awaiting metamask/web3 confirm result...", tokenId);

      // @ts-ignore
      const txresult = await transactor(writeContracts.AvatarNFT.tokenURI(tokenId))
      console.log("awaiting readContracts confirm result...", txresult);
    }
  }

  // @ts-ignore
  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/favicon/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/favicon/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/favicon/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/favicon/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/favicon/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/favicon/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/favicon/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/favicon/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicon/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json"/>
        <title>{t(`siteTitle`)}</title>
        <meta name="description" content={t(`siteDescription`)}/>
        <meta name="msapplication-TileColor" content="#fffefc"/>
        <meta
          name="msapplication-TileImage"
          content="/favicon/ms-icon-144x144.png"
        />
        <meta name="theme-color" content="#fffefc"/>
        <meta content={t(`siteDescription`)} name="description"/>
        <meta property="og:type" content="website"/>
        <meta property="og:site_name" content={t(`siteTitle`)}/>
        <meta property="og:title" content={t(`siteTitle`)}/>
        <meta property="og:description" content={t(`siteDescription`)}/>
        <meta property="og:image" content="https://i.imgur.com/F5R0K03.png"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:image" content="https://i.imgur.com/F5R0K03.png"/>
        <meta name="twitter:site" content="@phillzou"/>
        <meta name="twitter:title" content={t(`siteTitle`)}/>
        <meta name="twitter:description" content={t(`siteDescription`)}/>
      </Head>

      <Header
        address={address}
        localProvider={localProvider}
        userSigner={userSigner}
        mainnetProvider={mainnetProvider}
        price={""}
        web3Modal={web3Modal}
        loadWeb3Modal={loadWeb3Modal}
        logoutOfWeb3Modal={logoutOfWeb3Modal}
        blockExplorer={"blockExplorer"}
      />
      {networkDisplay}
      <main className="my-5">
        <AvatarEditor
          mintingNFT={mintingNFT}/>
      </main>
      <Footer/>
    </>
  );
};

// @ts-ignore
export async function getStaticProps({locale}) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'footer'])),
      // Will be passed to the page component as props
    },
  };
}

export default Home;
