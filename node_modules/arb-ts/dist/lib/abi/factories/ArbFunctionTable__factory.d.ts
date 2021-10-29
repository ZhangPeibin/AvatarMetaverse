import { Signer } from 'ethers';
import { Provider } from '@ethersproject/providers';
import type { ArbFunctionTable } from '../ArbFunctionTable';
export declare class ArbFunctionTable__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): ArbFunctionTable;
}
