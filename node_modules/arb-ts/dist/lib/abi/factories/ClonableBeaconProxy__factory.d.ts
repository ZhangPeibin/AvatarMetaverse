import { Signer } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { ContractFactory, Overrides } from '@ethersproject/contracts';
import type { ClonableBeaconProxy } from '../ClonableBeaconProxy';
export declare class ClonableBeaconProxy__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<ClonableBeaconProxy>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): ClonableBeaconProxy;
    connect(signer: Signer): ClonableBeaconProxy__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): ClonableBeaconProxy;
}
