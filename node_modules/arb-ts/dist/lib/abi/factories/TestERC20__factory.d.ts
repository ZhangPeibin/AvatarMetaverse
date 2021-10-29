import { Signer } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { ContractFactory, Overrides } from '@ethersproject/contracts';
import type { TestERC20 } from '../TestERC20';
export declare class TestERC20__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<TestERC20>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): TestERC20;
    connect(signer: Signer): TestERC20__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): TestERC20;
}
