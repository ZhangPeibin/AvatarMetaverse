import { Signer } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { ContractFactory, Overrides } from '@ethersproject/contracts';
import type { Rollup } from '../Rollup';
export declare class Rollup__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<Rollup>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): Rollup;
    connect(signer: Signer): Rollup__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): Rollup;
}
