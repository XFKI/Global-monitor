/**
 * Market configuration - sectors, commodities, stocks
 */

export interface SectorConfig {
	symbol: string;
	name: string;
}

export interface CommodityConfig {
	symbol: string;
	name: string;
	display: string;
}

export const SECTORS: SectorConfig[] = [
	{ symbol: 'XLK', name: 'Tech' },
	{ symbol: 'XLF', name: 'Finance' },
	{ symbol: 'XLE', name: 'Energy' },
	{ symbol: 'XLV', name: 'Health' },
	{ symbol: 'XLY', name: 'Consumer' },
	{ symbol: 'XLI', name: 'Industrial' },
	{ symbol: 'XLP', name: 'Staples' },
	{ symbol: 'XLU', name: 'Utilities' },
	{ symbol: 'XLB', name: 'Materials' },
	{ symbol: 'XLRE', name: 'Real Est' },
	{ symbol: 'XLC', name: 'Comms' },
	{ symbol: 'SMH', name: 'Semis' }
];

export const COMMODITIES: CommodityConfig[] = [
	{ symbol: '^VIX', name: 'VIX', display: 'VIX' },
	{ symbol: 'GC=F', name: 'Gold', display: 'GOLD' },
	{ symbol: 'CL=F', name: 'Crude Oil', display: 'OIL' },
	{ symbol: 'NG=F', name: 'Natural Gas', display: 'NATGAS' },
	{ symbol: 'SI=F', name: 'Silver', display: 'SILVER' },
	{ symbol: 'HG=F', name: 'Copper', display: 'COPPER' }
];

// Major stock indices
export const INDICES = [
	{ symbol: '^DJI', name: 'Dow Jones', display: 'DOW' },
	{ symbol: '^GSPC', name: 'S&P 500', display: 'S&P' },
	{ symbol: '^IXIC', name: 'NASDAQ', display: 'NDQ' },
	{ symbol: '^RUT', name: 'Russell 2000', display: 'RUT' }
];

// Crypto assets tracked
export const CRYPTO = [
	{ id: 'bitcoin', symbol: 'BTC', name: 'Bitcoin' },
	{ id: 'ethereum', symbol: 'ETH', name: 'Ethereum' },
	{ id: 'solana', symbol: 'SOL', name: 'Solana' }
];

// Chinese A-share and HK indices
export const CN_INDICES = [
	{ symbol: '000001.SS', name: '上证指数', display: 'SSE', exchange: '上交所' },
	{ symbol: '399001.SZ', name: '深证成指', display: 'SZSE', exchange: '深交所' },
	{ symbol: '000300.SH', name: '沪深300', display: 'CSI300', exchange: '沪深' },
	{ symbol: '399006.SZ', name: '创业板指', display: 'GEM', exchange: '创业板' },
	{ symbol: '^HSI', name: '恒生指数', display: 'HSI', exchange: '港交所' },
	{ symbol: '^HSCE', name: '国企指数', display: 'HSCE', exchange: '港交所' }
];

// Chinese A-share sector ETFs (via Sina Finance / Yahoo Finance)
export const CN_SECTORS: SectorConfig[] = [
	{ symbol: '512690.SS', name: '消费ETF' },
	{ symbol: '512760.SS', name: '芯片ETF' },
	{ symbol: '515000.SS', name: '房地产ETF' },
	{ symbol: '159928.SZ', name: '消费ETF(深)' },
	{ symbol: '159915.SZ', name: '创业板ETF' },
	{ symbol: '588000.SS', name: '科创50ETF' }
];
