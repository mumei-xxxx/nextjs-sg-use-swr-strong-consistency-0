import useSWR, { SWRResponse } from 'swr'

import { fetcher } from '@/libraries/fetcher'

/**
 * @description
 * 参考にしたコード
 * useSWR api-hooks サンプル
 * https://github.com/vercel/swr/tree/main/examples/api-hooks
 * SWR ― 定期的な再検証
 * https://swr.vercel.app/ja/docs/revalidation#%E5%AE%9A%E6%9C%9F%E7%9A%84%E3%81%AA%E5%86%8D%E6%A4%9C%E8%A8%BC
 */
export const useBitcoinDataSWR = (
  fallbackData: BitflyerTickerResponseType
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): SWRResponse<BitflyerTickerResponseType, any> => {
  return useSWR(`api/bitcoin`, fetcher, { fallbackData, refreshInterval: 10000 })
}
