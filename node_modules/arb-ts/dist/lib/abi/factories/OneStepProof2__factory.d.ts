import { Signer } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { ContractFactory, Overrides } from '@ethersproject/contracts';
import type { OneStepProof2 } from '../OneStepProof2';
export declare class OneStepProof2__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<OneStepProof2>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): OneStepProof2;
    connect(signer: Signer): OneStepProof2__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): OneStepProof2;
}
