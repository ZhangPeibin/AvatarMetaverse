import { Signer } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { ContractFactory, Overrides } from '@ethersproject/contracts';
import type { OneStepProofHash } from '../OneStepProofHash';
export declare class OneStepProofHash__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<OneStepProofHash>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): OneStepProofHash;
    connect(signer: Signer): OneStepProofHash__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): OneStepProofHash;
}
