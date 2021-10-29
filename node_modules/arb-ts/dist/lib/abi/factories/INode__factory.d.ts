import { Signer } from 'ethers';
import { Provider } from '@ethersproject/providers';
import type { INode } from '../INode';
export declare class INode__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): INode;
}
