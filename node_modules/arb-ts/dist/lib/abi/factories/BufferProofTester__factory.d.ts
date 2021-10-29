import { Signer } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { ContractFactory, Overrides } from '@ethersproject/contracts';
import type { BufferProofTester } from '../BufferProofTester';
export declare class BufferProofTester__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<BufferProofTester>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): BufferProofTester;
    connect(signer: Signer): BufferProofTester__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): BufferProofTester;
}
