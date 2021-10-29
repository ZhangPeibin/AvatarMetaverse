import { Signer } from 'ethers';
import { Provider } from '@ethersproject/providers';
import type { ERC20PermitUpgradeable } from '../ERC20PermitUpgradeable';
export declare class ERC20PermitUpgradeable__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): ERC20PermitUpgradeable;
}
