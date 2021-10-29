import { Signer } from 'ethers';
import { Provider } from '@ethersproject/providers';
import type { ISequencerInbox } from '../ISequencerInbox';
export declare class ISequencerInbox__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): ISequencerInbox;
}
