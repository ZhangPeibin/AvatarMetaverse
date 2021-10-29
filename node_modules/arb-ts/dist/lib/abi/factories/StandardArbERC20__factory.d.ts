import { Signer } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { ContractFactory, Overrides } from '@ethersproject/contracts';
import type { StandardArbERC20 } from '../StandardArbERC20';
export declare class StandardArbERC20__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<StandardArbERC20>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): StandardArbERC20;
    connect(signer: Signer): StandardArbERC20__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): StandardArbERC20;
}
