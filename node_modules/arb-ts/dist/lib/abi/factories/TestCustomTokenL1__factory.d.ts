import { Signer } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { ContractFactory, Overrides } from '@ethersproject/contracts';
import type { TestCustomTokenL1 } from '../TestCustomTokenL1';
export declare class TestCustomTokenL1__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_bridge: string, overrides?: Overrides): Promise<TestCustomTokenL1>;
    getDeployTransaction(_bridge: string, overrides?: Overrides): TransactionRequest;
    attach(address: string): TestCustomTokenL1;
    connect(signer: Signer): TestCustomTokenL1__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): TestCustomTokenL1;
}
