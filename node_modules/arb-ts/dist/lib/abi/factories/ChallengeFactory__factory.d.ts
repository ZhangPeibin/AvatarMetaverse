import { Signer } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { ContractFactory, Overrides } from '@ethersproject/contracts';
import type { ChallengeFactory } from '../ChallengeFactory';
export declare class ChallengeFactory__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_executors: string[], overrides?: Overrides): Promise<ChallengeFactory>;
    getDeployTransaction(_executors: string[], overrides?: Overrides): TransactionRequest;
    attach(address: string): ChallengeFactory;
    connect(signer: Signer): ChallengeFactory__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): ChallengeFactory;
}
