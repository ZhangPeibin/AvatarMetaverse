import { Signer } from 'ethers';
import { Provider } from '@ethersproject/providers';
import type { IExitLiquidityProvider } from '../IExitLiquidityProvider';
export declare class IExitLiquidityProvider__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): IExitLiquidityProvider;
}
