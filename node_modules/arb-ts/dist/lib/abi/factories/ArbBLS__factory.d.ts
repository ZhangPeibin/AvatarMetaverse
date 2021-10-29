import { Signer } from 'ethers';
import { Provider } from '@ethersproject/providers';
import type { ArbBLS } from '../ArbBLS';
export declare class ArbBLS__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): ArbBLS;
}
