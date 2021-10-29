import { Signer } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { ContractFactory, Overrides } from '@ethersproject/contracts';
import type { InboxMock } from '../InboxMock';
export declare class InboxMock__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<InboxMock>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): InboxMock;
    connect(signer: Signer): InboxMock__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): InboxMock;
}
