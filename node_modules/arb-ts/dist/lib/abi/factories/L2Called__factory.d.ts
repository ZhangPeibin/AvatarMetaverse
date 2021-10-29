import { Signer } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { ContractFactory, Overrides } from '@ethersproject/contracts';
import type { L2Called } from '../L2Called';
export declare class L2Called__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<L2Called>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): L2Called;
    connect(signer: Signer): L2Called__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): L2Called;
}
