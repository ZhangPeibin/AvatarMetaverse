import { Signer } from 'ethers';
import { Provider } from '@ethersproject/providers';
import type { IBridge } from '../IBridge';
export declare class IBridge__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): IBridge;
}
