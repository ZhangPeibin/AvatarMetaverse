import { Signer } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { ContractFactory, Overrides } from '@ethersproject/contracts';
import type { BridgeCreator } from '../BridgeCreator';
export declare class BridgeCreator__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<BridgeCreator>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): BridgeCreator;
    connect(signer: Signer): BridgeCreator__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): BridgeCreator;
}
