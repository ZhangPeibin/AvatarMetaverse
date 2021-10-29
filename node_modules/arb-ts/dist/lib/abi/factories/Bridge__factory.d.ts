import { Signer } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { ContractFactory, Overrides } from '@ethersproject/contracts';
import type { Bridge } from '../Bridge';
export declare class Bridge__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<Bridge>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): Bridge;
    connect(signer: Signer): Bridge__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): Bridge;
}
