import { Signer } from 'ethers';
import { Provider } from '@ethersproject/providers';
import type { ArbOwner } from '../ArbOwner';
export declare class ArbOwner__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): ArbOwner;
}
