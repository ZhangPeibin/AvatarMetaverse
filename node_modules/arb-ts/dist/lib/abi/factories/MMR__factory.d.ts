import { Signer } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { ContractFactory, Overrides } from '@ethersproject/contracts';
import type { MMR } from '../MMR';
export declare class MMR__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<MMR>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): MMR;
    connect(signer: Signer): MMR__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): MMR;
}
