import { Signer } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { ContractFactory, Overrides } from '@ethersproject/contracts';
import type { ERC20Upgradeable } from '../ERC20Upgradeable';
export declare class ERC20Upgradeable__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<ERC20Upgradeable>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): ERC20Upgradeable;
    connect(signer: Signer): ERC20Upgradeable__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC20Upgradeable;
}
