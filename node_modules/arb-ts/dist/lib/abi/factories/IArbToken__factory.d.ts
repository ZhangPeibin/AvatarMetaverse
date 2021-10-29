import { Signer } from 'ethers';
import { Provider } from '@ethersproject/providers';
import type { IArbToken } from '../IArbToken';
export declare class IArbToken__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): IArbToken;
}
