import { Signer } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { ContractFactory, Overrides } from '@ethersproject/contracts';
import type { TestBuddy } from '../TestBuddy';
export declare class TestBuddy__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_inbox: string, _l2Deployer: string, overrides?: Overrides): Promise<TestBuddy>;
    getDeployTransaction(_inbox: string, _l2Deployer: string, overrides?: Overrides): TransactionRequest;
    attach(address: string): TestBuddy;
    connect(signer: Signer): TestBuddy__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): TestBuddy;
}
