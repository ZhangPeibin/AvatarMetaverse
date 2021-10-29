import { Signer } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { ContractFactory, Overrides } from '@ethersproject/contracts';
import type { MachineTester } from '../MachineTester';
export declare class MachineTester__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<MachineTester>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): MachineTester;
    connect(signer: Signer): MachineTester__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): MachineTester;
}
