import { Signer } from 'ethers';
import { Provider } from '@ethersproject/providers';
import type { ArbosTest } from '../ArbosTest';
export declare class ArbosTest__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): ArbosTest;
}
