import { Signer } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { ContractFactory, Overrides } from '@ethersproject/contracts';
import type { Underfunded } from '../Underfunded';
export declare class Underfunded__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<Underfunded>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): Underfunded;
    connect(signer: Signer): Underfunded__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): Underfunded;
}
