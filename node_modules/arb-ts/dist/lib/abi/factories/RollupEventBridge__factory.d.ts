import { Signer } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { ContractFactory, Overrides } from '@ethersproject/contracts';
import type { RollupEventBridge } from '../RollupEventBridge';
export declare class RollupEventBridge__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<RollupEventBridge>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): RollupEventBridge;
    connect(signer: Signer): RollupEventBridge__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): RollupEventBridge;
}
