import { Signer } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { ContractFactory, Overrides } from '@ethersproject/contracts';
import type { Fibonacci } from '../Fibonacci';
export declare class Fibonacci__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<Fibonacci>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): Fibonacci;
    connect(signer: Signer): Fibonacci__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): Fibonacci;
}
