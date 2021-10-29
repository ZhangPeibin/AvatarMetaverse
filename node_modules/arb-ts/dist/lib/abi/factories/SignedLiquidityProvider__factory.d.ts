import { Signer } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { ContractFactory, Overrides } from '@ethersproject/contracts';
import type { SignedLiquidityProvider } from '../SignedLiquidityProvider';
export declare class SignedLiquidityProvider__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_tokenBridge: string, _signer: string, overrides?: Overrides): Promise<SignedLiquidityProvider>;
    getDeployTransaction(_tokenBridge: string, _signer: string, overrides?: Overrides): TransactionRequest;
    attach(address: string): SignedLiquidityProvider;
    connect(signer: Signer): SignedLiquidityProvider__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): SignedLiquidityProvider;
}
