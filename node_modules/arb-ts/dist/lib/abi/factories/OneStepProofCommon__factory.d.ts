import { Signer } from 'ethers';
import { Provider } from '@ethersproject/providers';
import type { OneStepProofCommon } from '../OneStepProofCommon';
export declare class OneStepProofCommon__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): OneStepProofCommon;
}
