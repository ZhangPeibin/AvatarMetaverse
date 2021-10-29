import { Signer } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { ContractFactory, Overrides } from '@ethersproject/contracts';
import type { OneStepProof } from '../OneStepProof';
export declare class OneStepProof__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<OneStepProof>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): OneStepProof;
    connect(signer: Signer): OneStepProof__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): OneStepProof;
}
