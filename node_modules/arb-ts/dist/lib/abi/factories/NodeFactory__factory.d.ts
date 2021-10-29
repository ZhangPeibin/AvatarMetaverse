import { Signer } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { ContractFactory, Overrides } from '@ethersproject/contracts';
import type { NodeFactory } from '../NodeFactory';
export declare class NodeFactory__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<NodeFactory>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): NodeFactory;
    connect(signer: Signer): NodeFactory__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): NodeFactory;
}
