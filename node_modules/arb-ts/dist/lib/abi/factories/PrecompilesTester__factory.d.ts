import { Signer } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { ContractFactory, Overrides } from '@ethersproject/contracts';
import type { PrecompilesTester } from '../PrecompilesTester';
export declare class PrecompilesTester__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<PrecompilesTester>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): PrecompilesTester;
    connect(signer: Signer): PrecompilesTester__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): PrecompilesTester;
}
