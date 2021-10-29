import { Signer, BigNumberish } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { ContractFactory, PayableOverrides } from '@ethersproject/contracts';
import type { EthBatchTokenReceiver } from '../EthBatchTokenReceiver';
export declare class EthBatchTokenReceiver__factory extends ContractFactory {
    constructor(linkLibraryAddresses: EthBatchTokenReceiverLibraryAddresses, signer?: Signer);
    static linkBytecode(linkLibraryAddresses: EthBatchTokenReceiverLibraryAddresses): string;
    deploy(_inbox: string, _l2Deployer: string, _maxSubmissionCost: BigNumberish, _maxGas: BigNumberish, _gasPrice: BigNumberish, overrides?: PayableOverrides): Promise<EthBatchTokenReceiver>;
    getDeployTransaction(_inbox: string, _l2Deployer: string, _maxSubmissionCost: BigNumberish, _maxGas: BigNumberish, _gasPrice: BigNumberish, overrides?: PayableOverrides): TransactionRequest;
    attach(address: string): EthBatchTokenReceiver;
    connect(signer: Signer): EthBatchTokenReceiver__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): EthBatchTokenReceiver;
}
export interface EthBatchTokenReceiverLibraryAddresses {
    ['__$6bf011c07207fd4b4f621f21ef466e3cdb$__']: string;
}
