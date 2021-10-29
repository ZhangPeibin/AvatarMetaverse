import { Signer } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { ContractFactory, Overrides } from '@ethersproject/contracts';
import type { BuddyDeployer } from '../BuddyDeployer';
export declare class BuddyDeployer__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<BuddyDeployer>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): BuddyDeployer;
    connect(signer: Signer): BuddyDeployer__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): BuddyDeployer;
}
