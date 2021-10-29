import { Signer } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { ContractFactory, Overrides } from '@ethersproject/contracts';
import type { RollupCreator } from '../RollupCreator';
export declare class RollupCreator__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<RollupCreator>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): RollupCreator;
    connect(signer: Signer): RollupCreator__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): RollupCreator;
}
