import { Signer } from 'ethers';
import { Provider } from '@ethersproject/providers';
import type { ArbSys } from '../ArbSys';
export declare class ArbSys__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): ArbSys;
}
