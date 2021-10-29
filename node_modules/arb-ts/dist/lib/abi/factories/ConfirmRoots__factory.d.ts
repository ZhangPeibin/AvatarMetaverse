import { Signer } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { ContractFactory, Overrides } from '@ethersproject/contracts';
import type { ConfirmRoots } from '../ConfirmRoots';
export declare class ConfirmRoots__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_rollup: string, overrides?: Overrides): Promise<ConfirmRoots>;
    getDeployTransaction(_rollup: string, overrides?: Overrides): TransactionRequest;
    attach(address: string): ConfirmRoots;
    connect(signer: Signer): ConfirmRoots__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): ConfirmRoots;
}
