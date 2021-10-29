import { Signer } from 'ethers';
import { Provider } from '@ethersproject/providers';
import type { IInbox } from '../IInbox';
export declare class IInbox__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): IInbox;
}
