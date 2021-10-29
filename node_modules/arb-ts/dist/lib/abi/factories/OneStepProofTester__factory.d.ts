import { Signer } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { ContractFactory, Overrides } from '@ethersproject/contracts';
import type { OneStepProofTester } from '../OneStepProofTester';
export declare class OneStepProofTester__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<OneStepProofTester>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): OneStepProofTester;
    connect(signer: Signer): OneStepProofTester__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): OneStepProofTester;
}
