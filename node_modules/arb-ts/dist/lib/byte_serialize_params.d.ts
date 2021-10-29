import { BigNumber } from '@ethersproject/bignumber';
import { providers, Signer } from 'ethers';
declare type PrimativeType = string | number | boolean | BigNumber;
declare type PrimativeOrPrimativeArray = PrimativeType | PrimativeType[];
export declare const getAddressIndex: (address: string, signerOrProvider: Signer | providers.JsonRpcProvider) => Promise<number>;
/**
  // to use:
  ```js
  const mySerializeParamsFunction = argSerializerConstructor("rpcurl")
  mySerializeParamsFunction(["4","5", "6"])
  ```
*/
export declare const argSerializerConstructor: (arbProvider: providers.JsonRpcProvider) => (params: PrimativeOrPrimativeArray[]) => Promise<Uint8Array>;
/**
 * @param params array of serializable types to
 * @param addressToIndex optional getter of address index registered in table
 */
export declare const serializeParams: (params: PrimativeOrPrimativeArray[], addressToIndex?: (address: string) => Promise<number>) => Promise<Uint8Array>;
export {};
