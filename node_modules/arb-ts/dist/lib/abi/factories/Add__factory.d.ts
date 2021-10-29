import { Signer } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { ContractFactory, PayableOverrides } from '@ethersproject/contracts';
import type { Add } from '../Add';
export declare class Add__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: PayableOverrides): Promise<Add>;
    getDeployTransaction(overrides?: PayableOverrides): TransactionRequest;
    attach(address: string): Add;
    connect(signer: Signer): Add__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): Add;
}
