import { Signer } from 'ethers';
import { Provider } from '@ethersproject/providers';
import type { ProxySetter } from '../ProxySetter';
export declare class ProxySetter__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): ProxySetter;
}
