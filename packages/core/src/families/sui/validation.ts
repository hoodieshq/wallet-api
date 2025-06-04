import { z } from "zod";
import { schemaFamilies, schemaTransactionCommon } from "../common";

export const schemaRawSuiTransaction = schemaTransactionCommon.extend({
  family: z.literal(schemaFamilies.enum.sui),
  coinType: z.string(),
  mode: z.string(),
  fees: z.string().optional(),
});
