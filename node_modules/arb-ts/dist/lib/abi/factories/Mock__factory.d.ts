import { Signer } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { ContractFactory, Overrides } from '@ethersproject/contracts';
import type { Mock } from '../Mock';
export declare class Mock__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_mocked: string, overrides?: Overrides): Promise<Mock>;
    getDeployTransaction(_mocked: string, overrides?: Overrides): TransactionRequest;
    attach(address: string): Mock;
    connect(signer: Signer): Mock__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): Mock;
}
