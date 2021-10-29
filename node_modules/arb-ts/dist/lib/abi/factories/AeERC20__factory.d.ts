import { Signer } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { ContractFactory, Overrides } from '@ethersproject/contracts';
import type { AeERC20 } from '../AeERC20';
export declare class AeERC20__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<AeERC20>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): AeERC20;
    connect(signer: Signer): AeERC20__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): AeERC20;
}
