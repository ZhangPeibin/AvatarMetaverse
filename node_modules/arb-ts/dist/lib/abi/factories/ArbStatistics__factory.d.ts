import { Signer } from 'ethers';
import { Provider } from '@ethersproject/providers';
import type { ArbStatistics } from '../ArbStatistics';
export declare class ArbStatistics__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): ArbStatistics;
}
