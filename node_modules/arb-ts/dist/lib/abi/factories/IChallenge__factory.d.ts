import { Signer } from 'ethers';
import { Provider } from '@ethersproject/providers';
import type { IChallenge } from '../IChallenge';
export declare class IChallenge__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): IChallenge;
}
