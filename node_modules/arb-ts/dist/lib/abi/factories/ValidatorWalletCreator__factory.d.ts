import { Signer } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { ContractFactory, Overrides } from '@ethersproject/contracts';
import type { ValidatorWalletCreator } from '../ValidatorWalletCreator';
export declare class ValidatorWalletCreator__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<ValidatorWalletCreator>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): ValidatorWalletCreator;
    connect(signer: Signer): ValidatorWalletCreator__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): ValidatorWalletCreator;
}
