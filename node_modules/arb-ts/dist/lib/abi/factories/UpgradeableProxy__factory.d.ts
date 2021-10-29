import { Signer, BytesLike } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { ContractFactory, PayableOverrides } from '@ethersproject/contracts';
import type { UpgradeableProxy } from '../UpgradeableProxy';
export declare class UpgradeableProxy__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_logic: string, _data: BytesLike, overrides?: PayableOverrides): Promise<UpgradeableProxy>;
    getDeployTransaction(_logic: string, _data: BytesLike, overrides?: PayableOverrides): TransactionRequest;
    attach(address: string): UpgradeableProxy;
    connect(signer: Signer): UpgradeableProxy__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): UpgradeableProxy;
}
