import Image from 'next/image';
import Decoration from './decoration';
import Account from '../Account'
export default function Header(props: { address: any; localProvider: any; userSigner: any; mainnetProvider: any; price: any; web3Modal: any; loadWeb3Modal: any; logoutOfWeb3Modal: any; blockExplorer: any; }) {
  return (
    <header className="relative">
      <div className="flex py-5 px-5 sm:px-16 md:px-32">
        <Image
          src="/logo.gif"
          alt="Notion Avatar Logo"
          width={50}
          height={50}
        />
        <span className="text-lg">
          NFT
          <br />
          Avatar Metaverse
        </span>
      </div>
      <div className="absolute top-4  right-64" >
        <Account
          address={props.address}
          localProvider={props.localProvider}
          userSigner={props.userSigner}
          mainnetProvider={props.mainnetProvider}
          price={props.price}
          web3Modal={props.web3Modal}
          loadWeb3Modal={props.loadWeb3Modal}
          logoutOfWeb3Modal={props.logoutOfWeb3Modal}
          blockExplorer={props.blockExplorer} minimized={undefined}/>
      </div>
      <Decoration className="absolute top-0 right-0 w-24 sm:w-28 md:w-36" />
    </header>
  );
}
