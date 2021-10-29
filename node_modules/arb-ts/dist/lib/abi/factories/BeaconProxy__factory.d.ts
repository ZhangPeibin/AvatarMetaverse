import { Signer, BytesLike } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { ContractFactory, PayableOverrides } from '@ethersproject/contracts';
import type { BeaconProxy } from '../BeaconProxy';
export declare class BeaconProxy__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(beacon: string, data: BytesLike, overrides?: PayableOverrides): Promise<BeaconProxy>;
    getDeployTransaction(beacon: string, data: BytesLike, overrides?: PayableOverrides): TransactionRequest;
    attach(address: string): BeaconProxy;
    connect(signer: Signer): BeaconProxy__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): BeaconProxy;
}
