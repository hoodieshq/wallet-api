import BigNumber from "bignumber.js";
import type { RawSuiTransaction, SuiTransaction } from "./types";

export function serializeSuiTransaction({
  amount,
  coinType,
  recipient,
  family,
  mode,
  fees,
}: SuiTransaction): RawSuiTransaction {
  return {
    amount: amount.toString(),
    coinType,
    recipient,
    family,
    mode,
    fees: fees?.toString(),
  };
}

export function deserializeSuiTransaction({
  amount,
  coinType,
  recipient,
  family,
  mode,
  fees,
}: RawSuiTransaction): SuiTransaction {
  return {
    amount: new BigNumber(amount),
    coinType,
    recipient,
    family,
    mode,
    fees: fees ? new BigNumber(fees) : undefined,
  };
}
