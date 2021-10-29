import { Signer } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { ContractFactory, Overrides } from '@ethersproject/contracts';
import type { SequencerInbox } from '../SequencerInbox';
export declare class SequencerInbox__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<SequencerInbox>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): SequencerInbox;
    connect(signer: Signer): SequencerInbox__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): SequencerInbox;
}
