import { Signer } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { ContractFactory, Overrides } from '@ethersproject/contracts';
import type { UpgradeableBeacon } from '../UpgradeableBeacon';
export declare class UpgradeableBeacon__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(implementation_: string, overrides?: Overrides): Promise<UpgradeableBeacon>;
    getDeployTransaction(implementation_: string, overrides?: Overrides): TransactionRequest;
    attach(address: string): UpgradeableBeacon;
    connect(signer: Signer): UpgradeableBeacon__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): UpgradeableBeacon;
}
