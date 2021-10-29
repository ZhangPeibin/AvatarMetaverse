import { Signer } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { ContractFactory, Overrides } from '@ethersproject/contracts';
import type { ArbInfo } from '../ArbInfo';
export declare class ArbInfo__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<ArbInfo>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): ArbInfo;
    connect(signer: Signer): ArbInfo__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): ArbInfo;
}
