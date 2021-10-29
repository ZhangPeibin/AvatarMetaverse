import { Signer, BigNumberish } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { ContractFactory, Overrides } from '@ethersproject/contracts';
import type { ReverterFactory } from '../ReverterFactory';
export declare class ReverterFactory__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(mode: BigNumberish, overrides?: Overrides): Promise<ReverterFactory>;
    getDeployTransaction(mode: BigNumberish, overrides?: Overrides): TransactionRequest;
    attach(address: string): ReverterFactory;
    connect(signer: Signer): ReverterFactory__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): ReverterFactory;
}
