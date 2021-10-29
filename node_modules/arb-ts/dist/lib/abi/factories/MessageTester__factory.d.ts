import { Signer } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { ContractFactory, Overrides } from '@ethersproject/contracts';
import type { MessageTester } from '../MessageTester';
export declare class MessageTester__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<MessageTester>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): MessageTester;
    connect(signer: Signer): MessageTester__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): MessageTester;
}
