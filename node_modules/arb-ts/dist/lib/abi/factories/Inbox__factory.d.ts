import { Signer } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { ContractFactory, Overrides } from '@ethersproject/contracts';
import type { Inbox } from '../Inbox';
export declare class Inbox__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<Inbox>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): Inbox;
    connect(signer: Signer): Inbox__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): Inbox;
}
