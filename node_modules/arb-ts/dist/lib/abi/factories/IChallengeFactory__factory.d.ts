import { Signer } from 'ethers';
import { Provider } from '@ethersproject/providers';
import type { IChallengeFactory } from '../IChallengeFactory';
export declare class IChallengeFactory__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): IChallengeFactory;
}
