import { Signer } from 'ethers';
import { Provider } from '@ethersproject/providers';
import type { ArbGasInfo } from '../ArbGasInfo';
export declare class ArbGasInfo__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): ArbGasInfo;
}
