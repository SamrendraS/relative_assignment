export const URL_MAP = {
    BTC: "https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=024",
    SOL: "https://upload.wikimedia.org/wikipedia/en/b/b9/Solana_logo.png",
    ETH: "https://cryptologos.cc/logos/ethereum-eth-logo.png?v=024",
    BUSD: "https://cryptologos.cc/logos/binance-usd-busd-logo.png?v=024",
    SHIB: "https://cryptologos.cc/logos/shiba-inu-shib-logo.png?v=024"
}

export const cards = [
    {
        displayName: "Bitcoin (BTC)",
        price: 31812.80,
        returnPerc: 10,
        TVL: 60000,
        displayImage: URL_MAP.BTC,
        pairs: [URL_MAP.SOL, URL_MAP.ETH, URL_MAP.BUSD],
        gradientStop: "via-transparent to-orange-400"
    },
    {
        displayName: "Solana (SOL)",
        price: 32.83,
        returnPerc: -12.32,
        TVL: 60000,
        displayImage: URL_MAP.SOL,
        pairs: [URL_MAP.BTC, URL_MAP.ETH, URL_MAP.BUSD],
        gradientStop: "via-transparent to-indigo-500"
    },
    {
        displayName: "Ethereum (ETH)",
        price: 1466.45,
        returnPerc: -11.93,
        TVL: 60000,
        displayImage: URL_MAP.ETH,
        pairs: [URL_MAP.SOL, URL_MAP.BTC, URL_MAP.BUSD],
        gradientStop: "via-transparent to-indigo-200"
    },
    {
        displayName: "Binance USD (BUSD)",
        price: 1.00,
        returnPerc: 0.26,
        TVL: 60000,
        displayImage: URL_MAP.BUSD,
        pairs: [URL_MAP.SOL, URL_MAP.ETH, URL_MAP.BUSD],
        gradientStop: "via-transparent to-yellow-300"
    },
    {
        displayName: "Shiba Inu (SHIB)",
        price: 0.00000001948,
        returnPerc: -8.1,
        TVL: 60000,
        displayImage: URL_MAP.SHIB,
        pairs: [URL_MAP.SOL, URL_MAP.ETH, URL_MAP.BUSD],
        gradientStop: "via-transparent to-red-400"
    }
]