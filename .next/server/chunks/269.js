"use strict";
exports.id = 269;
exports.ids = [269];
exports.modules = {

/***/ 269:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "mL": () => (/* reexport */ useBurnerSigner_useBurnerSigner),
  "vA": () => (/* reexport */ useContractLoader),
  "Fh": () => (/* reexport */ useGasPrice)
});

// UNUSED EXPORTS: useBalance, useBlockNumber, useContractExistsAtAddress, useContractReader, useNonce, useOnBlock, useOnRepetition, usePoller, useTimestamp, useUserAddress, useUserProviderAndSigner

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: ../../node_modules/eth-hooks/useOnRepetition.js

const DEBUG = false;
/**
 * A combination of useOnBlock and usePoller
 * helper hook to call a function regularly at time intervals when the block changes
 * @param provider ethers/web3 provider
 * @param callback any function
 * @param args function parameters
 */

/**
 * A combination of useOnBlock and usePoller
 * - the hook will invoke a callback regularly on the "block" event.  If a pollTime is provided,
 * it will use that instead.
 * - the hook will invoke the callback when the leadTrigger changes state to true as a leading invokation
 * @param callback (func) :: callback funciton, can have variable args
 * @param options (TOptions)
 * @param args varargs callback function arguments
 */

const useOnRepetition_useOnRepetition = (callback, options, ...args) => {
  const polling = (options === null || options === void 0 ? void 0 : options.pollTime) && options.pollTime > 0;
  const leadingCall = (0,external_react_.useRef)(true); // created a strigified args to use for deps

  const argDeps = JSON.stringify(args !== null && args !== void 0 ? args : []); // save the input function provided

  const callFunctionWithArgs = (0,external_react_.useCallback)(() => {
    if (callback) {
      if (args && args.length > 0) {
        void callback(...args);
      } else {
        void callback();
      }
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [callback, argDeps, args]); // Turn on the listener if we have a function & a provider

  const listener = (0,external_react_.useCallback)(_blockNumber => {
    if (options.provider) callFunctionWithArgs();
  }, [callFunctionWithArgs, options.provider]); // connect a listener for block changes

  (0,external_react_.useEffect)(() => {
    if (options.provider && !polling) {
      if (DEBUG) console.log('register block event', ...args);
      options.provider.addListener('block', listener);
      listener(0);
      return () => {
        var _a;

        if (DEBUG) console.log('unregister block event', ...args);
        (_a = options === null || options === void 0 ? void 0 : options.provider) === null || _a === void 0 ? void 0 : _a.removeListener('block', listener);
      };
    } else {
      return () => {
        /* do nothing */
      };
    }
  }, [options.provider, polling, listener, args]); // Set up the interval if its using polling

  (0,external_react_.useEffect)(() => {
    const tick = () => {
      if (DEBUG) console.log('polling: call function');
      callFunctionWithArgs();
    };

    if (polling && (options === null || options === void 0 ? void 0 : options.pollTime)) {
      const safePollTime = (options === null || options === void 0 ? void 0 : options.pollTime) > 10000 ? options.pollTime : 10000;
      const id = setInterval(tick, safePollTime);
      return () => {
        clearInterval(id);
      };
    }
  }, [options.pollTime, polling, callFunctionWithArgs]); // call if triggered by extra watch, however only on inital call

  (0,external_react_.useEffect)(() => {
    if (options.leadingTrigger && callFunctionWithArgs != null && (leadingCall === null || leadingCall === void 0 ? void 0 : leadingCall.current) === true) {
      leadingCall.current = false;
      callFunctionWithArgs();
    }
  }, [options.leadingTrigger, callFunctionWithArgs]);
};
;// CONCATENATED MODULE: ../../node_modules/eth-hooks/useBlockNumber.js


/**
 * Get the current block number of the network
 * @param provider (TEthersProvider)
 * @param pollTime (number) :: if >0 use polling, else use instead of onBlock event
 * @returns (number) :: block number
 */

const useBlockNumber_useBlockNumber = (provider, pollTime = 0) => {
  const {
    0: blockNumber,
    1: setBlockNumber
  } = useState(0);
  const getBlockNumber = useCallback(async () => {
    const nextBlockNumber = await provider.getBlockNumber();

    if (nextBlockNumber !== blockNumber) {
      setBlockNumber(nextBlockNumber);
    }
  }, [blockNumber, provider]);
  useOnRepetition(getBlockNumber, {
    provider,
    pollTime
  });
  return blockNumber;
};
// EXTERNAL MODULE: ../../node_modules/eth-hooks/node_modules/ethers/lib/index.js
var lib = __webpack_require__(1562);
;// CONCATENATED MODULE: ../../node_modules/eth-hooks/useBalance.js



const zero = lib.BigNumber.from(0);
/**
 * Gets your balance in ETH from given address and provider
 *
 * ~ Features ~
  - Provide address and get balance corresponding to given address
  - Change provider to access balance on different chains (ex. mainnetProvider)
  - If no pollTime is passed, the balance will update on every new block
 * @param provider (ethers->Provider)
 * @param address (string)
 * @param pollTime (number) :: if >0 use polling, else use instead of onBlock event
 * @returns (Bignumber) ::  current balance
 */

const useBalance = (provider, address, pollTime = 0) => {
  const {
    0: balance,
    1: setBalance
  } = useState();
  const pollBalance = useCallback(async (provider, address) => {
    if (provider && address) {
      const newBalance = await provider.getBalance(address);

      if (!newBalance.eq(balance !== null && balance !== void 0 ? balance : zero)) {
        setBalance(newBalance);
        console.log(address, newBalance.toString(), balance);
      }
    }
  }, [balance]);
  useOnRepetition(pollBalance, {
    pollTime,
    provider,
    leadingTrigger: address != null && address !== '' && provider != null
  }, provider, address);
  return balance !== null && balance !== void 0 ? balance : zero;
};
;// CONCATENATED MODULE: ../../node_modules/eth-hooks/useBurnerSigner.js


/**
 * A hook that creates a buner address and returns a Signer
 * @param provider (TEthersProvider)
 * @returns (ethers.signer) :: signer of the wallet
 */

const useBurnerSigner_useBurnerSigner = provider => {
  const key = 'metaPrivateKey';
  const {
    0: signer,
    1: setSigner
  } = (0,external_react_.useState)();
  const {
    0: privateKeyValue,
    1: setPrivateKeyValue
  } = (0,external_react_.useState)();

  const setValue = value => {
    try {
      setPrivateKeyValue(value);
      window.localStorage.setItem(key, value);
    } catch (error) {
      console.log(error);
    }
  };

  (0,external_react_.useEffect)(() => {
    const storedKey = window.localStorage.getItem(key);

    if (!storedKey) {
      console.log('generating a new key');
      const newWallet = lib.ethers.Wallet.createRandom();
      const newKey = newWallet.privateKey;
      setValue(newKey);
    } else {
      setValue(storedKey);
    }
  }, []);
  (0,external_react_.useEffect)(() => {
    if (privateKeyValue && provider) {
      const wallet = new lib.ethers.Wallet(privateKeyValue);
      const newSigner = wallet.connect(provider);
      setSigner(newSigner);
    }
  }, [privateKeyValue, provider]);
  return signer;
};
;// CONCATENATED MODULE: ../../node_modules/eth-hooks/useContractExistsAtAddress.js


/**
 * Checks whether a contract exists on the blockchain, returns true if it exists, otherwise false
 *
  ~ Features ~
  - Provide contractAddress to check if the contract is deployed
  - Change provider to check contract address on different chains (ex. mainnetProvider)
 * @param provider (TEthersProvider)
 * @param contractAddress (string)
 * @returns (boolean)
 */

const useContractExistsAtAddress = (provider, contractAddress) => {
  const {
    0: contractIsDeployed,
    1: setContractIsDeployed
  } = useState(false);
  useEffect(() => {
    /**
     * We can look at the blockchain and see what's stored at `contractAddress`
     * If we find code then we know that a contract exists there.
     * If we find nothing (0x0) then there is no contract deployed to that address
     */
    const checkDeployment = async () => {
      if (!utils.isAddress(contractAddress)) {
        return;
      }

      if (provider) {
        const bytecode = await provider.getCode(contractAddress);
        setContractIsDeployed(bytecode !== '0x');
      }
    };

    void checkDeployment();
  }, [provider, contractAddress]);
  return contractIsDeployed;
};
// EXTERNAL MODULE: ../../node_modules/@ethersproject/providers/lib/index.js
var providers_lib = __webpack_require__(8406);
;// CONCATENATED MODULE: ../../node_modules/eth-hooks/functions/providerOrSigner.js


/**
 * Parse TEthersProviderOrSigner to TProviderAndSigner
 * @param providerOrSigner TEthersProviderOrSigner
 * @returns TProviderAndSigner
 */

const providerOrSigner_parseProviderOrSigner = async providerOrSigner => {
  let signer = undefined;
  let provider;
  let providerNetwork;

  if (providerOrSigner && (providerOrSigner instanceof providers_lib.JsonRpcProvider || providerOrSigner instanceof providers_lib.Web3Provider)) {
    const accounts = await providerOrSigner.listAccounts();

    if (accounts && accounts.length > 0) {
      signer = providerOrSigner.getSigner();
    }

    provider = providerOrSigner;
    providerNetwork = await providerOrSigner.getNetwork();
  }

  if (!signer && providerOrSigner instanceof lib.Signer) {
    signer = providerOrSigner;
    provider = signer.provider;
    providerNetwork = provider && (await provider.getNetwork());
  }

  return {
    signer,
    provider,
    providerNetwork
  };
};
;// CONCATENATED MODULE: ../../node_modules/eth-hooks/useContractLoader.js



/**
 * Loads your local contracts and gives options to read values from contracts
  or write transactions into them

   ~ Features ~
  - localProvider enables reading values from contracts
  - userProvider enables writing transactions into contracts
  - Example of keeping track of "purpose" variable by loading contracts into readContracts
    and using ContractReader.js hook:
    const purpose = useContractReader(readContracts,"YourContract", "purpose")
  - Example of using setPurpose function from our contract and writing transactions by Transactor.js helper:
    tx( writeContracts.YourContract.setPurpose(newPurpose) )

  config can include:
  - chainId - to hardcode the chainId, irrespective of the providerOrSigner chainId
  - hardhatNetworkName - to hardcode the hardhat network of interest
  - customAddresses: { contractName: 0xCustomAddress } to hardcode the address for a given named contract
  - hardhatContracts: object following the hardhat deploy export format (Json with chainIds as keys, which have hardhat network names as keys, which contain arrays of contracts for each)
  - externalContracts: object with chainIds as keys, with an array of contracts for each
 * @param providerOrSigner (TEthersProviderOrSigner)
 * @param config (TContractConfig) :: configuration for loader
 * @returns (Record<string, Contract>) :: a record of contractName:contract
 */

const useContractLoader = (providerOrSigner, config = {}, chainId) => {
  const {
    0: contracts,
    1: setContracts
  } = (0,external_react_.useState)({});
  const configDep = (0,external_react_.useMemo)(() => JSON.stringify(config !== null && config !== void 0 ? config : {}), [config]);
  (0,external_react_.useEffect)(() => {
    let active = true;

    const loadContracts = async () => {
      var _a, _b, _c, _d, _e;

      if (providerOrSigner && typeof providerOrSigner !== 'undefined') {
        console.log(`loading contracts`);
        console.log(providerOrSigner, config);

        try {
          // we need to check to see if this providerOrSigner has a signer or not
          if (typeof providerOrSigner !== 'undefined') {
            // we need to check to see if this providerOrSigner has a signer or not
            const {
              providerNetwork
            } = await providerOrSigner_parseProviderOrSigner(providerOrSigner); // find the current chainId based on this order:
            //  - chainId passed in or a fallback of provider chainId

            const currentChainId = (_a = chainId !== null && chainId !== void 0 ? chainId : providerNetwork === null || providerNetwork === void 0 ? void 0 : providerNetwork.chainId) !== null && _a !== void 0 ? _a : 0; // Type definition
            //  Record<string, Record<string, Contract>>
            //  { chainId: { contractName: Contract } }

            const contractList = Object.assign({}, (_b = config.deployedContracts) !== null && _b !== void 0 ? _b : {});
            const externalContractList = Object.assign({}, (_c = config.externalContracts) !== null && _c !== void 0 ? _c : {});
            let combinedContracts = {}; // combine partitioned contracts based on all the available and chain id.

            if ((contractList === null || contractList === void 0 ? void 0 : contractList[currentChainId]) != null) {
              for (const hardhatNetwork in contractList[currentChainId]) {
                if (Object.prototype.hasOwnProperty.call(contractList[currentChainId], hardhatNetwork)) {
                  if (!config.hardhatNetworkName || hardhatNetwork === config.hardhatNetworkName) {
                    combinedContracts = Object.assign(Object.assign({}, combinedContracts), (_e = (_d = contractList === null || contractList === void 0 ? void 0 : contractList[currentChainId]) === null || _d === void 0 ? void 0 : _d[hardhatNetwork]) === null || _e === void 0 ? void 0 : _e.contracts);
                  }
                }
              }
            }

            if ((externalContractList === null || externalContractList === void 0 ? void 0 : externalContractList[currentChainId]) != null) {
              combinedContracts = Object.assign(Object.assign({}, combinedContracts), externalContractList[currentChainId].contracts);
            }

            const newContracts = Object.keys(combinedContracts).reduce((accumulator, contractName) => {
              const address = config.customAddresses && Object.keys(config.customAddresses).includes(contractName) ? config.customAddresses[contractName] : combinedContracts[contractName].address;
              accumulator[contractName] = new lib.ethers.Contract(address, combinedContracts[contractName].abi, providerOrSigner);
              return accumulator;
            }, {});
            if (active) setContracts(newContracts);
          }
        } catch (e) {
          console.log('ERROR LOADING CONTRACTS!!', e);
        }
      }
    };

    void loadContracts();
    return () => {
      active = false;
    }; // disable as configDep is used for dep instead of config
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [providerOrSigner, configDep]);
  return contracts;
};
;// CONCATENATED MODULE: ../../node_modules/eth-hooks/useContractReader.js


const useContractReader_DEBUG = false;
/**
 * Enables you to call functions in contracts and read their values.  It helps keep track of them in the local React states
 *
  ~ Features ~
  - Provide readContracts by loading contracts (see more on ContractLoader.js)
  - Specify the name of the contract, in this case it is "YourContract"
  - Specify the name of the variable in the contract, in this case we keep track of "purpose" variable
  - Pass an args array if the function requires
  - Pass pollTime - if no pollTime is specified, the function will update on every new block
 * @param contracts (Record<string, Contract>) :: a record of contractName/contract
 * @param contractName (string) :: The contract name
 * @param functionName (string) :: The function name in the contract
 * @param functionArgs (any[]) :: arguments to functions
 * @param pollTime (number) :: optional :: if >0 use polling, else use instead of onBlock event
 * @param formatter ((_value: T) => T) :: optional :: function to format the result
 * @param onChange (string) :: optional :: callback to call with the function
 * @returns (<T>) :: generic return type
 */

const useContractReader = (contracts, contractName, functionName, functionArgs = [], pollTime, formatter, onChange) => {
  var _a;

  const {
    0: value,
    1: setValue
  } = useState();
  useEffect(() => {
    if (typeof onChange === 'function') {
      setTimeout(onChange.bind(undefined, value), 1);
    }
  }, [value, onChange]);
  const updateValue = useCallback(async () => {
    var _a;

    try {
      const contractFunction = (_a = contracts === null || contracts === void 0 ? void 0 : contracts[contractName]) === null || _a === void 0 ? void 0 : _a[functionName];
      let newValue;
      if (useContractReader_DEBUG) console.log('CALLING ', contractName, functionName, 'with args', functionArgs);

      if (contractFunction) {
        if (functionArgs && functionArgs.length > 0) {
          newValue = await contractFunction(...functionArgs);
          if (useContractReader_DEBUG) console.log('contractName', contractName, 'functionName', functionName, 'functionArgs', functionArgs, 'RESULT:', newValue);
        } else {
          newValue = await contractFunction();
        }

        if (formatter && typeof formatter === 'function') {
          newValue = formatter(newValue);
        }

        setValue(newValue);
      }
    } catch (e) {
      console.log(e);
    }
  }, [contracts, contractName, functionName, functionArgs, formatter]);
  useOnRepetition(updateValue, {
    pollTime,
    leadingTrigger: (contracts === null || contracts === void 0 ? void 0 : contracts[contractName]) != null,
    provider: (_a = contracts === null || contracts === void 0 ? void 0 : contracts[contractName]) === null || _a === void 0 ? void 0 : _a.provider
  }, functionArgs);
  return value;
};
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ../../node_modules/eth-hooks/useGasPrice.js



/**
 * Gets the gas price from Eth Gas Station
 * @param targetNetwork (TNetwork)
 * @param speed (TGasStationSpeed) 'fast', 'fastest', 'safeLow', 'average'
 * @param pollTime (number) :: if > 0 use polling, else use instead of onBlock event
 * @returns (number) gas price in gwei
 */

const useGasPrice = (targetNetwork, speed, pollTime = 39999) => {
  const multiplier = 100000000;
  const {
    0: gasPrice,
    1: setGasPrice
  } = (0,external_react_.useState)();
  const loadGasPrice = (0,external_react_.useCallback)(() => {
    if (targetNetwork === null || targetNetwork === void 0 ? void 0 : targetNetwork.gasPrice) {
      setGasPrice(targetNetwork.gasPrice);
    } else {
      if (navigator.onLine) {
        external_axios_default().get('https://ethgasstation.info/json/ethgasAPI.json').then(response => {
          var _a;

          const result = (_a = response.data) !== null && _a !== void 0 ? _a : {};
          let newGasPrice = result[speed] * multiplier;
          if (!newGasPrice) newGasPrice = result['fast'] * multiplier;

          if (newGasPrice !== gasPrice) {
            setGasPrice(newGasPrice);
          }
        }).catch(error => {
          console.log('⚠ Could not get gas Price!', error);
          setGasPrice(undefined);
        });
      }
    }
  }, [gasPrice, speed, targetNetwork.gasPrice]);
  useOnRepetition_useOnRepetition(loadGasPrice, {
    pollTime,
    leadingTrigger: true
  });
  return gasPrice;
};
;// CONCATENATED MODULE: ../../node_modules/eth-hooks/useNonce.js


/**
 * Get the current nonce of the address provided
 * @param provider (TEthersProvider)
 * @param address (string)
 * @param pollTime (number) :: if >0 use polling, else use instead of onBlock event
 * @returns (number) nonce
 */

const useNonce = (provider, address, pollTime = 0) => {
  const {
    0: nonce,
    1: setNonce
  } = useState(0);
  const getTransactionCount = useCallback(async () => {
    const nextNonce = await (provider === null || provider === void 0 ? void 0 : provider.getTransactionCount(address));

    if (nextNonce !== nonce && nextNonce >= 0) {
      setNonce(nextNonce);
    }
  }, [nonce]);
  useOnRepetition(getTransactionCount, {
    pollTime,
    leadingTrigger: provider != null
  });
  return nonce;
};
;// CONCATENATED MODULE: ../../node_modules/eth-hooks/useOnBlock.js

const useOnBlock_DEBUG = false;
/**
 * @see useOnRepetition for a newer implementation
 * helper hook to call a function regularly at time intervals when the block changes.
 * @param provider ethers/web3 provider
 * @param callbackFn any function
 * @param args function parameters
 */

const useOnBlock = (provider, callbackFn, ...args) => {
  // save the input function provided
  const savedCallback = useRef();
  useEffect(() => {
    savedCallback.current = callbackFn;
  }, [callbackFn]); // Turn on the listener if we have a function & a provider

  const listener = useCallback(blockNumber => {
    if (provider) {
      if (useOnBlock_DEBUG) console.log(blockNumber, callbackFn, args, provider.listeners());

      if (savedCallback.current) {
        if (args && args.length > 0) {
          savedCallback.current(...args);
        } else {
          savedCallback.current();
        }
      }
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, []);
  useEffect(() => {
    if (provider) {
      provider.on('block', listener);
      return () => {
        provider.off('block', listener);
      };
    } else {
      return () => {
        /* cleanup */
      };
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [provider]);
};
;// CONCATENATED MODULE: ../../node_modules/eth-hooks/usePoller.js

/**
 * @see useOnRepetition for a newer implementation
 * helper hook to call a function regularly in time intervals
 * @param callbackFn
 * @param delay
 * @param extraWatch
 */

const usePoller = (callbackFn, delay, extraWatch = false) => {
  const savedCallback = useRef(); // Remember the latest fn.

  useEffect(() => {
    savedCallback.current = callbackFn;
  }, [callbackFn]); // Set up the interval.

  useEffect(() => {
    const tick = () => {
      if (savedCallback.current) savedCallback.current();
    };

    if (delay !== null && delay > 0) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]); // run at start too

  useEffect(() => {
    if (savedCallback.current && delay > 0) savedCallback.current(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [extraWatch]);
};
;// CONCATENATED MODULE: ../../node_modules/eth-hooks/useTimestamp.js


/**
 * Get the current timestamp from the latest block
 * @param provider (TEthersProvider)
 * @param pollTime (number) :: if >0 use polling, else use instead of onBlock event
 * @returns (number) :: timestamp
 */

const useTimestamp = (provider, pollTime) => {
  const blockNumber = useBlockNumber(provider, pollTime);
  const {
    0: timestamp,
    1: setTimestamp
  } = useState(0);
  useEffect(() => {
    const getTimestamp = async () => {
      const nextBlock = await provider.getBlock(blockNumber);

      if ((nextBlock === null || nextBlock === void 0 ? void 0 : nextBlock.timestamp) != null) {
        const nextTimestamp = nextBlock.timestamp;
        setTimestamp(nextTimestamp);
      }
    };

    void getTimestamp();
  }, [blockNumber, provider]);
  return timestamp;
};
;// CONCATENATED MODULE: ../../node_modules/eth-hooks/useUserProviderAndSigner.js




const syncBurnerKeyFromStorage = () => {
  if (window.location.pathname && window.location.pathname.includes('/pk')) {
    const incomingPK = window.location.hash.replace('#', '');

    if (incomingPK.length === 64 || incomingPK.length === 66) {
      console.log('🔑 Incoming Private Key...');
      const rawPK = incomingPK;
      window.history.pushState({}, '', '/');
      const currentPrivateKey = window.localStorage.getItem('metaPrivateKey');

      if (currentPrivateKey && currentPrivateKey !== rawPK) {
        window.localStorage.setItem(`metaPrivateKey_backup${Date.now()}`, currentPrivateKey);
      }

      window.localStorage.setItem('metaPrivateKey', rawPK);
    }
  }
};
/**
 *  Gets user provider/signer from injected provider or local provider
 *  Use your injected provider from 🦊 Metamask
 *  If you don't have it then instantly generate a 🔥 burner wallet from a local provider
 *
  ~ Features ~
  - Specify the injected provider from Metamask
  - Specify the local provider
  - Usage examples:
    const tx = Transactor(userSigner, gasPrice)
 * @param injectedProviderOrSigner (TEthersProviderOrSigner) :: injected provider/signer from metamask etc..
 * @param localProvider (TEthersProvider) local provider to generate a burner wallet from
 * @returns (TProviderAndSigner)
 */


const useUserProviderAndSigner = (injectedProviderOrSigner, localProvider) => {
  const {
    0: signer,
    1: setSigner
  } = useState();
  const {
    0: provider,
    1: setProvider
  } = useState();
  const {
    0: providerNetwork,
    1: setProviderNetwork
  } = useState();
  const burnerSigner = useBurnerSigner(localProvider);
  useMemo(() => {
    if (injectedProviderOrSigner) {
      console.log('🦊 Using injected provider');
      void parseProviderOrSigner(injectedProviderOrSigner).then(result => {
        if (result != null) setSigner(result.signer);
      });
    } else if (!localProvider) {
      setSigner(undefined);
    } else {
      syncBurnerKeyFromStorage();
      console.log('🔥 Using burner signer', burnerSigner);
      setSigner(burnerSigner);
    }
  }, [injectedProviderOrSigner, localProvider, burnerSigner]);
  useMemo(() => {
    if (signer) {
      const result = parseProviderOrSigner(signer);
      void result.then(r => {
        setProvider(r.provider);
        setProviderNetwork(r.providerNetwork);
      });
    }
  }, [signer]);
  return {
    signer,
    provider,
    providerNetwork
  };
};
;// CONCATENATED MODULE: ../../node_modules/eth-hooks/useUserAddress.js


/**
 * Get the address from the current signer or provider
 * @param providerOrSigner (TEthersProviderOrSigner)
 * @returns (string) :: address
 */

const useUserAddress = providerOrSigner => {
  const {
    0: userAddress,
    1: setUserAddress
  } = useState('');
  useEffect(() => {
    const getUserAddress = async providerOrSigner => {
      var _a;

      const result = await parseProviderOrSigner(providerOrSigner);

      if (result.signer) {
        const address = await ((_a = result.signer) === null || _a === void 0 ? void 0 : _a.getAddress());
        setUserAddress(address);
      }
    };

    if (providerOrSigner) void getUserAddress(providerOrSigner);
  }, [providerOrSigner]);
  return userAddress;
};
;// CONCATENATED MODULE: ../../node_modules/eth-hooks/index.js















/***/ })

};
;