import { Signer } from 'ethers';
import { Provider } from '@ethersproject/providers';
import type { ArbRetryableTx } from '../ArbRetryableTx';
export declare class ArbRetryableTx__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): ArbRetryableTx;
}
