import { Signer } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { ContractFactory, Overrides } from '@ethersproject/contracts';
import type { ArbBatchTokenMover } from '../ArbBatchTokenMover';
export declare class ArbBatchTokenMover__factory extends ContractFactory {
    constructor(linkLibraryAddresses: ArbBatchTokenMoverLibraryAddresses, signer?: Signer);
    static linkBytecode(linkLibraryAddresses: ArbBatchTokenMoverLibraryAddresses): string;
    deploy(overrides?: Overrides): Promise<ArbBatchTokenMover>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): ArbBatchTokenMover;
    connect(signer: Signer): ArbBatchTokenMover__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): ArbBatchTokenMover;
}
export interface ArbBatchTokenMoverLibraryAddresses {
    ['__$6bf011c07207fd4b4f621f21ef466e3cdb$__']: string;
}
