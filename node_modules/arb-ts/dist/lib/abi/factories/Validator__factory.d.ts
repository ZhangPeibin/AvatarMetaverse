import { Signer } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { ContractFactory, Overrides } from '@ethersproject/contracts';
import type { Validator } from '../Validator';
export declare class Validator__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<Validator>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): Validator;
    connect(signer: Signer): Validator__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): Validator;
}
