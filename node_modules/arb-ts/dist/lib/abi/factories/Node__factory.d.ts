import { Signer } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { ContractFactory, Overrides } from '@ethersproject/contracts';
import type { Node } from '../Node';
export declare class Node__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<Node>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): Node;
    connect(signer: Signer): Node__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): Node;
}
