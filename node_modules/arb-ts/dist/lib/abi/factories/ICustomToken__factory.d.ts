import { Signer } from 'ethers';
import { Provider } from '@ethersproject/providers';
import type { ICustomToken } from '../ICustomToken';
export declare class ICustomToken__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): ICustomToken;
}
