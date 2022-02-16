/**
 * @description
 * useSWR のパラメータなどで使用する。
 * @param {string} [args] API URL
 * @returns {Promise<BitflyerTickerResponseType>} API レスポンス
 */
export const fetcher = async (args: string): Promise<BitflyerTickerResponseType> => {
  const response = await fetch(args)
  return (await response.json()) as BitflyerTickerResponseType
}
