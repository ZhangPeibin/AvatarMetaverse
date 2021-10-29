import { Signer, BytesLike, BigNumberish } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { ContractFactory, Overrides } from '@ethersproject/contracts';
import type { RollupCreatorNoProxy } from '../RollupCreatorNoProxy';
export declare class RollupCreatorNoProxy__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_challengeFactory: string, _machineHash: BytesLike, _confirmPeriodBlocks: BigNumberish, _extraChallengeTimeBlocks: BigNumberish, _arbGasSpeedLimitPerBlock: BigNumberish, _baseStake: BigNumberish, _stakeToken: string, _owner: string, _sequencer: string, _sequencerDelayBlocks: BigNumberish, _sequencerDelaySeconds: BigNumberish, _extraConfig: BytesLike, overrides?: Overrides): Promise<RollupCreatorNoProxy>;
    getDeployTransaction(_challengeFactory: string, _machineHash: BytesLike, _confirmPeriodBlocks: BigNumberish, _extraChallengeTimeBlocks: BigNumberish, _arbGasSpeedLimitPerBlock: BigNumberish, _baseStake: BigNumberish, _stakeToken: string, _owner: string, _sequencer: string, _sequencerDelayBlocks: BigNumberish, _sequencerDelaySeconds: BigNumberish, _extraConfig: BytesLike, overrides?: Overrides): TransactionRequest;
    attach(address: string): RollupCreatorNoProxy;
    connect(signer: Signer): RollupCreatorNoProxy__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): RollupCreatorNoProxy;
}
