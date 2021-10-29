import { Signer } from 'ethers';
import { Provider } from '@ethersproject/providers';
import type { RetryableTicketCreator } from '../RetryableTicketCreator';
export declare class RetryableTicketCreator__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): RetryableTicketCreator;
}
