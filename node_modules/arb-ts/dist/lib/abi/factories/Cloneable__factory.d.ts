import { Signer } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { ContractFactory, Overrides } from '@ethersproject/contracts';
import type { Cloneable } from '../Cloneable';
export declare class Cloneable__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<Cloneable>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): Cloneable;
    connect(signer: Signer): Cloneable__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): Cloneable;
}
