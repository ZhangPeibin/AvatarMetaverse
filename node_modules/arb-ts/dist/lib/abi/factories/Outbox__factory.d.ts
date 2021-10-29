import { Signer } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { ContractFactory, Overrides } from '@ethersproject/contracts';
import type { Outbox } from '../Outbox';
export declare class Outbox__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<Outbox>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): Outbox;
    connect(signer: Signer): Outbox__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): Outbox;
}
