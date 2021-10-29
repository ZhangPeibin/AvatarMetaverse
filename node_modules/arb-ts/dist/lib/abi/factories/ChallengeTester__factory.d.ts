import { Signer } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { ContractFactory, Overrides } from '@ethersproject/contracts';
import type { ChallengeTester } from '../ChallengeTester';
export declare class ChallengeTester__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_executors: string[], overrides?: Overrides): Promise<ChallengeTester>;
    getDeployTransaction(_executors: string[], overrides?: Overrides): TransactionRequest;
    attach(address: string): ChallengeTester;
    connect(signer: Signer): ChallengeTester__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): ChallengeTester;
}
