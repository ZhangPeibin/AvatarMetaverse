import { Signer } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { ContractFactory, Overrides } from '@ethersproject/contracts';
import type { FastExitMock } from '../FastExitMock';
export declare class FastExitMock__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<FastExitMock>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): FastExitMock;
    connect(signer: Signer): FastExitMock__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): FastExitMock;
}
