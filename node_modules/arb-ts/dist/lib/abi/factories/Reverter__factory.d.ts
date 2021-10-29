import { Signer, BigNumberish } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { ContractFactory, Overrides } from '@ethersproject/contracts';
import type { Reverter } from '../Reverter';
export declare class Reverter__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(mode: BigNumberish, overrides?: Overrides): Promise<Reverter>;
    getDeployTransaction(mode: BigNumberish, overrides?: Overrides): TransactionRequest;
    attach(address: string): Reverter;
    connect(signer: Signer): Reverter__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): Reverter;
}
