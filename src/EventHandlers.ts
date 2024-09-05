/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  LpManager,
  LpManager_EndMinting,
  LpManager_StartMinting,
  LpManager_Unwrap,
  LpManager_Wrap,
  LpNft,
  LpNft_Transfer,
} from "generated";

LpManager.EndMinting.handler(async ({ event, context }) => {
  const entity: LpManager_EndMinting = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    creator: event.params.creator,
    depositIdIsTokenId: event.params.depositIdIsTokenId,
    _ustcPlusAmount: event.params._ustcPlusAmount,
  };

  context.LpManager_EndMinting.set(entity);
});


LpManager.StartMinting.handler(async ({ event, context }) => {
  const entity: LpManager_StartMinting = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    creator: event.params.creator,
    depositId: event.params.depositId,
    usdcAmount: event.params.usdcAmount,
  };

  context.LpManager_StartMinting.set(entity);
});


LpManager.Unwrap.handler(async ({ event, context }) => {
  const entity: LpManager_Unwrap = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    creator: event.params.creator,
    _terraAddress: event.params._terraAddress,
    _ustcPlusAmount: event.params._ustcPlusAmount,
  };

  context.LpManager_Unwrap.set(entity);
});


LpManager.Wrap.handler(async ({ event, context }) => {
  const entity: LpManager_Wrap = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    creator: event.params.creator,
    _terraAddress: event.params._terraAddress,
    _ustcPlusAmount: event.params._ustcPlusAmount,
  };

  context.LpManager_Wrap.set(entity);
});


LpNft.Transfer.handler(async ({ event, context }) => {
  const entity: LpNft_Transfer = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    from: event.params.from,
    to: event.params.to,
    tokenId: event.params.tokenId,
  };

  context.LpNft_Transfer.set(entity);
});

