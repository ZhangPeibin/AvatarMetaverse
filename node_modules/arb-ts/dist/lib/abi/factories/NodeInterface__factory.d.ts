import { Signer } from 'ethers';
import { Provider } from '@ethersproject/providers';
import type { NodeInterface } from '../NodeInterface';
export declare class NodeInterface__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): NodeInterface;
}
