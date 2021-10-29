import { Signer } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { ContractFactory, Overrides } from '@ethersproject/contracts';
import type { StakedLiquidityProvider } from '../StakedLiquidityProvider';
export declare class StakedLiquidityProvider__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_tokenBridge: string, _confirmRoots: string, _trustedStaker: string, overrides?: Overrides): Promise<StakedLiquidityProvider>;
    getDeployTransaction(_tokenBridge: string, _confirmRoots: string, _trustedStaker: string, overrides?: Overrides): TransactionRequest;
    attach(address: string): StakedLiquidityProvider;
    connect(signer: Signer): StakedLiquidityProvider__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): StakedLiquidityProvider;
}
