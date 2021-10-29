import { Signer } from 'ethers';
import { Provider } from '@ethersproject/providers';
import type { IOneStepProof } from '../IOneStepProof';
export declare class IOneStepProof__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): IOneStepProof;
}
