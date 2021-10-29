import { Signer } from 'ethers';
import { Provider } from '@ethersproject/providers';
import type { IERC20Upgradeable } from '../IERC20Upgradeable';
export declare class IERC20Upgradeable__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): IERC20Upgradeable;
}
