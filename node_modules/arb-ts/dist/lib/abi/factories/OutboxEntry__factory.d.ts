import { Signer } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { ContractFactory, Overrides } from '@ethersproject/contracts';
import type { OutboxEntry } from '../OutboxEntry';
export declare class OutboxEntry__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<OutboxEntry>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): OutboxEntry;
    connect(signer: Signer): OutboxEntry__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): OutboxEntry;
}
