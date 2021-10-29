import { Signer } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { ContractFactory, Overrides } from '@ethersproject/contracts';
import type { PaymentChannel } from '../PaymentChannel';
export declare class PaymentChannel__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(fibAddress: string, overrides?: Overrides): Promise<PaymentChannel>;
    getDeployTransaction(fibAddress: string, overrides?: Overrides): TransactionRequest;
    attach(address: string): PaymentChannel;
    connect(signer: Signer): PaymentChannel__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): PaymentChannel;
}
