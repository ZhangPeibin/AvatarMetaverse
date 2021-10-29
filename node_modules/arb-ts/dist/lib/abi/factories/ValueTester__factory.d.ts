import { Signer } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { ContractFactory, Overrides } from '@ethersproject/contracts';
import type { ValueTester } from '../ValueTester';
export declare class ValueTester__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<ValueTester>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): ValueTester;
    connect(signer: Signer): ValueTester__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): ValueTester;
}
