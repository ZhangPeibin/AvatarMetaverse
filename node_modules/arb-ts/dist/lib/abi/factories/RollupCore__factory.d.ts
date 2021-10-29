import { Signer } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { ContractFactory, Overrides } from '@ethersproject/contracts';
import type { RollupCore } from '../RollupCore';
export declare class RollupCore__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<RollupCore>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): RollupCore;
    connect(signer: Signer): RollupCore__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): RollupCore;
}
