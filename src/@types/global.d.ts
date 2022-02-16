/**
 * @description API仕様
 * ビットコイン取引所【bitFlyer Lightning】
 * API Documentation
 * https://lightning.bitflyer.com/docs?lang=ja&_gl=1*7z87hf*_ga*MTMwMTY3NzUzMi4xNjQ0OTI3MjM1*_ga_3VYMQNCVSM*MTY0NDkyNzIzNS4xLjEuMTY0NDkyOTA5Mi42MA..#http-public-api
 */
interface BitflyerTickerResponseType {
  product_code: string
  timestamp: string
  best_bid: string
  best_ask: string
}
