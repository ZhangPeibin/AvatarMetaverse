import { Signer } from 'ethers';
import { Provider } from '@ethersproject/providers';
import type { ArbAggregator } from '../ArbAggregator';
export declare class ArbAggregator__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): ArbAggregator;
}
