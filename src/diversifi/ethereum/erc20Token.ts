/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
    BaseContract,
    BigNumber,
    BigNumberish,
    BytesLike,
    CallOverrides,
    ContractTransaction,
    Overrides,
    PopulatedTransaction,
    Signer,
    utils,
  } from "ethers";
  import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
  import { Listener, Provider } from "@ethersproject/providers";
  import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common"
  
  export interface StandardTokenInterface extends utils.Interface {
    functions: {
      "allowance(address,address)": FunctionFragment;
      "allowed(address,address)": FunctionFragment;
      "approve(address,uint256)": FunctionFragment;
      "balanceOf(address)": FunctionFragment;
      "balances(address)": FunctionFragment;
      "decimals()": FunctionFragment;
      "name()": FunctionFragment;
      "symbol()": FunctionFragment;
      "totalSupply()": FunctionFragment;
      "transfer(address,uint256)": FunctionFragment;
      "transferFrom(address,address,uint256)": FunctionFragment;
    };
  
    encodeFunctionData(
      functionFragment: "allowance",
      values: [string, string]
    ): string;
    encodeFunctionData(
      functionFragment: "allowed",
      values: [string, string]
    ): string;
    encodeFunctionData(
      functionFragment: "approve",
      values: [string, BigNumberish]
    ): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
    encodeFunctionData(functionFragment: "balances", values: [string]): string;
    encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(
      functionFragment: "totalSupply",
      values?: undefined
    ): string;
    encodeFunctionData(
      functionFragment: "transfer",
      values: [string, BigNumberish]
    ): string;
    encodeFunctionData(
      functionFragment: "transferFrom",
      values: [string, string, BigNumberish]
    ): string;
  
    decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balances", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(
      functionFragment: "totalSupply",
      data: BytesLike
    ): Result;
    decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
    decodeFunctionResult(
      functionFragment: "transferFrom",
      data: BytesLike
    ): Result;
  
    events: {
      "Approval(address,address,uint256)": EventFragment;
      "Transfer(address,address,uint256)": EventFragment;
    };
  
    getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
  }
  
  export type ApprovalEvent = TypedEvent<
    [string, string, BigNumber],
    { _owner: string; _spender: string; _value: BigNumber }
  >;
  
  export type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;
  
  export type TransferEvent = TypedEvent<
    [string, string, BigNumber],
    { _from: string; _to: string; _value: BigNumber }
  >;
  
  export type TransferEventFilter = TypedEventFilter<TransferEvent>;
  
  export interface StandardToken extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
  
    interface: StandardTokenInterface;
  
    queryFilter<TEvent extends TypedEvent>(
      event: TypedEventFilter<TEvent>,
      fromBlockOrBlockhash?: string | number | undefined,
      toBlock?: string | number | undefined
    ): Promise<Array<TEvent>>;
  
    listeners<TEvent extends TypedEvent>(
      eventFilter?: TypedEventFilter<TEvent>
    ): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(
      eventFilter: TypedEventFilter<TEvent>
    ): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
  
    functions: {
      allowance(
        _owner: string,
        _spender: string,
        overrides?: CallOverrides
      ): Promise<[BigNumber] & { remaining: BigNumber }>;
  
      allowed(
        arg0: string,
        arg1: string,
        overrides?: CallOverrides
      ): Promise<[BigNumber]>;
  
      approve(
        _spender: string,
        _value: BigNumberish,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<ContractTransaction>;
  
      balanceOf(
        _owner: string,
        overrides?: CallOverrides
      ): Promise<[BigNumber] & { balance: BigNumber }>;
  
      balances(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
  
      decimals(overrides?: CallOverrides): Promise<[number]>;
  
      name(overrides?: CallOverrides): Promise<[string]>;
  
      symbol(overrides?: CallOverrides): Promise<[string]>;
  
      totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
  
      transfer(
        _to: string,
        _value: BigNumberish,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<ContractTransaction>;
  
      transferFrom(
        _from: string,
        _to: string,
        _value: BigNumberish,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<ContractTransaction>;
    };
  
    allowance(
      _owner: string,
      _spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  
    allowed(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  
    approve(
      _spender: string,
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  
    balanceOf(_owner: string, overrides?: CallOverrides): Promise<BigNumber>;
  
    balances(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
  
    decimals(overrides?: CallOverrides): Promise<number>;
  
    name(overrides?: CallOverrides): Promise<string>;
  
    symbol(overrides?: CallOverrides): Promise<string>;
  
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
  
    transfer(
      _to: string,
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  
    transferFrom(
      _from: string,
      _to: string,
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  
    callStatic: {
      allowance(
        _owner: string,
        _spender: string,
        overrides?: CallOverrides
      ): Promise<BigNumber>;
  
      allowed(
        arg0: string,
        arg1: string,
        overrides?: CallOverrides
      ): Promise<BigNumber>;
  
      approve(
        _spender: string,
        _value: BigNumberish,
        overrides?: CallOverrides
      ): Promise<boolean>;
  
      balanceOf(_owner: string, overrides?: CallOverrides): Promise<BigNumber>;
  
      balances(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
  
      decimals(overrides?: CallOverrides): Promise<number>;
  
      name(overrides?: CallOverrides): Promise<string>;
  
      symbol(overrides?: CallOverrides): Promise<string>;
  
      totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
  
      transfer(
        _to: string,
        _value: BigNumberish,
        overrides?: CallOverrides
      ): Promise<boolean>;
  
      transferFrom(
        _from: string,
        _to: string,
        _value: BigNumberish,
        overrides?: CallOverrides
      ): Promise<boolean>;
    };
  
    filters: {
      "Approval(address,address,uint256)"(
        _owner?: string | null,
        _spender?: string | null,
        _value?: null
      ): ApprovalEventFilter;
      Approval(
        _owner?: string | null,
        _spender?: string | null,
        _value?: null
      ): ApprovalEventFilter;
  
      "Transfer(address,address,uint256)"(
        _from?: string | null,
        _to?: string | null,
        _value?: null
      ): TransferEventFilter;
      Transfer(
        _from?: string | null,
        _to?: string | null,
        _value?: null
      ): TransferEventFilter;
    };
  
    estimateGas: {
      allowance(
        _owner: string,
        _spender: string,
        overrides?: CallOverrides
      ): Promise<BigNumber>;
  
      allowed(
        arg0: string,
        arg1: string,
        overrides?: CallOverrides
      ): Promise<BigNumber>;
  
      approve(
        _spender: string,
        _value: BigNumberish,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<BigNumber>;
  
      balanceOf(_owner: string, overrides?: CallOverrides): Promise<BigNumber>;
  
      balances(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
  
      decimals(overrides?: CallOverrides): Promise<BigNumber>;
  
      name(overrides?: CallOverrides): Promise<BigNumber>;
  
      symbol(overrides?: CallOverrides): Promise<BigNumber>;
  
      totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
  
      transfer(
        _to: string,
        _value: BigNumberish,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<BigNumber>;
  
      transferFrom(
        _from: string,
        _to: string,
        _value: BigNumberish,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<BigNumber>;
    };
  
    populateTransaction: {
      allowance(
        _owner: string,
        _spender: string,
        overrides?: CallOverrides
      ): Promise<PopulatedTransaction>;
  
      allowed(
        arg0: string,
        arg1: string,
        overrides?: CallOverrides
      ): Promise<PopulatedTransaction>;
  
      approve(
        _spender: string,
        _value: BigNumberish,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<PopulatedTransaction>;
  
      balanceOf(
        _owner: string,
        overrides?: CallOverrides
      ): Promise<PopulatedTransaction>;
  
      balances(
        arg0: string,
        overrides?: CallOverrides
      ): Promise<PopulatedTransaction>;
  
      decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  
      name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  
      symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  
      totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  
      transfer(
        _to: string,
        _value: BigNumberish,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<PopulatedTransaction>;
  
      transferFrom(
        _from: string,
        _to: string,
        _value: BigNumberish,
        overrides?: Overrides & { from?: string | Promise<string> }
      ): Promise<PopulatedTransaction>;
    };
  }