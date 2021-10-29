import { Signer } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { ContractFactory, Overrides } from '@ethersproject/contracts';
import type { Callback } from '../Callback';
export declare class Callback__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<Callback>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): Callback;
    connect(signer: Signer): Callback__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): Callback;
}
