import { Signer } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { ContractFactory, Overrides } from '@ethersproject/contracts';
import type { Challenge } from '../Challenge';
export declare class Challenge__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<Challenge>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): Challenge;
    connect(signer: Signer): Challenge__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): Challenge;
}
