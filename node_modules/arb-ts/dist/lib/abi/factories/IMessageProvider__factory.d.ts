import { Signer } from 'ethers';
import { Provider } from '@ethersproject/providers';
import type { IMessageProvider } from '../IMessageProvider';
export declare class IMessageProvider__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): IMessageProvider;
}
