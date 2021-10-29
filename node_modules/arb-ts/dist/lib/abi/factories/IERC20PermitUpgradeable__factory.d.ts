import { Signer } from 'ethers';
import { Provider } from '@ethersproject/providers';
import type { IERC20PermitUpgradeable } from '../IERC20PermitUpgradeable';
export declare class IERC20PermitUpgradeable__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): IERC20PermitUpgradeable;
}
