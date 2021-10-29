import { Signer } from 'ethers';
import { Provider } from '@ethersproject/providers';
import type { ArbAddressTable } from '../ArbAddressTable';
export declare class ArbAddressTable__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): ArbAddressTable;
}
