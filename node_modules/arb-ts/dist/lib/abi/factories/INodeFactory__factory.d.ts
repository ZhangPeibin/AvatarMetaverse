import { Signer } from 'ethers';
import { Provider } from '@ethersproject/providers';
import type { INodeFactory } from '../INodeFactory';
export declare class INodeFactory__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): INodeFactory;
}
