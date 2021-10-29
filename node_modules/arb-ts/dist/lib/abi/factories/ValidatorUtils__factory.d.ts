import { Signer } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { ContractFactory, Overrides } from '@ethersproject/contracts';
import type { ValidatorUtils } from '../ValidatorUtils';
export declare class ValidatorUtils__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<ValidatorUtils>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): ValidatorUtils;
    connect(signer: Signer): ValidatorUtils__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): ValidatorUtils;
}
