import { Signer, BytesLike, BigNumberish } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { ContractFactory, PayableOverrides } from '@ethersproject/contracts';
import type { TestConstructorBuddy } from '../TestConstructorBuddy';
export declare class TestConstructorBuddy__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_inbox: string, _l2Deployer: string, _maxSubmissionCost: BigNumberish, _maxGas: BigNumberish, _gasPrice: BigNumberish, _deployCode: BytesLike, overrides?: PayableOverrides): Promise<TestConstructorBuddy>;
    getDeployTransaction(_inbox: string, _l2Deployer: string, _maxSubmissionCost: BigNumberish, _maxGas: BigNumberish, _gasPrice: BigNumberish, _deployCode: BytesLike, overrides?: PayableOverrides): TransactionRequest;
    attach(address: string): TestConstructorBuddy;
    connect(signer: Signer): TestConstructorBuddy__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): TestConstructorBuddy;
}
