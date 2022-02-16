import useSWR, { SWRResponse } from 'swr'

import { fetcher } from '@/libraries/fetcher'

/**
 * @description
 * 参考にしたコード
 * useSWR api-hooks サンプル
 * https://github.com/vercel/swr/tree/main/examples/api-hooks
 */
export const useBitcoinDataSWR = (
  fallbackData: BitflyerTickerResponseType
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): SWRResponse<BitflyerTickerResponseType, any> => {
  return useSWR(`api/bitcoin`, fetcher, { fallbackData })
}
