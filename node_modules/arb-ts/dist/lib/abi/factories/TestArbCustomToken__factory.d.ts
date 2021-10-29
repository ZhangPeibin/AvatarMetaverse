import { Signer } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { ContractFactory, Overrides } from '@ethersproject/contracts';
import type { TestArbCustomToken } from '../TestArbCustomToken';
export declare class TestArbCustomToken__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_bridge: string, _l1Address: string, overrides?: Overrides): Promise<TestArbCustomToken>;
    getDeployTransaction(_bridge: string, _l1Address: string, overrides?: Overrides): TransactionRequest;
    attach(address: string): TestArbCustomToken;
    connect(signer: Signer): TestArbCustomToken__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): TestArbCustomToken;
}
