import { Signer } from 'ethers';
import { Provider } from '@ethersproject/providers';
import type { L1Buddy } from '../L1Buddy';
export declare class L1Buddy__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): L1Buddy;
}
