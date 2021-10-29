import { Signer } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { ContractFactory, Overrides } from '@ethersproject/contracts';
import type { HashingTester } from '../HashingTester';
export declare class HashingTester__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<HashingTester>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): HashingTester;
    connect(signer: Signer): HashingTester__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): HashingTester;
}
