import { Signer } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { ContractFactory, Overrides } from '@ethersproject/contracts';
import type { ProxyAdmin } from '../ProxyAdmin';
export declare class ProxyAdmin__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<ProxyAdmin>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): ProxyAdmin;
    connect(signer: Signer): ProxyAdmin__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): ProxyAdmin;
}
