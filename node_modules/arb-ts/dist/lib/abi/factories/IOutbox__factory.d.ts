import { Signer } from 'ethers';
import { Provider } from '@ethersproject/providers';
import type { IOutbox } from '../IOutbox';
export declare class IOutbox__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): IOutbox;
}
