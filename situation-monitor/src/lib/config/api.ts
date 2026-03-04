/**
 * API Configuration
 */

import { browser } from '$app/environment';

/**
 * Finnhub API key
 * Get your free key at: https://finnhub.io/
 * Free tier: 60 calls/minute
 */
export const FINNHUB_API_KEY = browser
	? (import.meta.env?.VITE_FINNHUB_API_KEY ?? '')
	: (process.env.VITE_FINNHUB_API_KEY ?? '');

export const FINNHUB_BASE_URL = 'https://finnhub.io/api/v1';

/**
 * FRED API key (St. Louis Fed)
 * Get your free key at: https://fred.stlouisfed.org/docs/api/api_key.html
 * Free tier: Unlimited requests
 */
export const FRED_API_KEY = browser
	? (import.meta.env?.VITE_FRED_API_KEY ?? '')
	: (process.env.VITE_FRED_API_KEY ?? '');

export const FRED_BASE_URL = 'https://api.stlouisfed.org/fred';

/**
 * Check if we're in development mode
 * Uses import.meta.env which is available in both browser and test environments
 */
const isDev = browser ? (import.meta.env?.DEV ?? false) : false;

/**
 * CORS proxy URLs for external API requests
 * Primary: allorigins.win (reliable, no rate limit on GET)
 * Secondary: corsproxy.io (fallback)
 * Tertiary: direct fetch (works for APIs with CORS headers like GDELT)
 */
export const CORS_PROXIES = {
	primary: 'https://api.allorigins.win/raw?url=',
	fallback: 'https://corsproxy.io/?url=',
	tertiary: 'https://cors.eu.org/'
} as const;

// Default export for backward compatibility
export const CORS_PROXY_URL = CORS_PROXIES.primary;

/**
 * Fetch with CORS proxy cascade
 * Tries primary → fallback → direct, returns first success
 */
export async function fetchWithProxy(url: string): Promise<Response> {
	const encodedUrl = encodeURIComponent(url);

	// 1. Try primary proxy (allorigins.win)
	try {
		const response = await fetch(CORS_PROXIES.primary + encodedUrl, {
			signal: AbortSignal.timeout(12000)
		});
		if (response.ok) return response;
		logger.warn('API', `Primary proxy failed (${response.status}), trying fallback`);
	} catch (error) {
		logger.warn('API', 'Primary proxy error, trying fallback:', error);
	}

	// 2. Try secondary proxy (corsproxy.io)
	try {
		const response = await fetch(CORS_PROXIES.fallback + encodedUrl, {
			signal: AbortSignal.timeout(12000)
		});
		if (response.ok) return response;
		logger.warn('API', `Secondary proxy failed (${response.status}), trying direct`);
	} catch (error) {
		logger.warn('API', 'Secondary proxy error, trying direct:', error);
	}

	// 3. Try direct fetch (works for GDELT and other CORS-enabled APIs)
	return fetch(url, { signal: AbortSignal.timeout(15000) });
}

/**
 * API request delays (ms) to avoid rate limiting
 */
export const API_DELAYS = {
	betweenCategories: 500,
	betweenRetries: 1000
} as const;

/**
 * Cache TTLs (ms)
 */
export const CACHE_TTLS = {
	weather: 10 * 60 * 1000, // 10 minutes
	news: 5 * 60 * 1000, // 5 minutes
	markets: 60 * 1000, // 1 minute
	default: 5 * 60 * 1000 // 5 minutes
} as const;

/**
 * Debug/logging configuration
 */
export const DEBUG = {
	enabled: isDev,
	logApiCalls: isDev,
	logCacheHits: false
} as const;

/**
 * Conditional logger - only logs in development
 */
export const logger = {
	log: (prefix: string, ...args: unknown[]) => {
		if (DEBUG.logApiCalls) {
			console.log(`[${prefix}]`, ...args);
		}
	},
	warn: (prefix: string, ...args: unknown[]) => {
		console.warn(`[${prefix}]`, ...args);
	},
	error: (prefix: string, ...args: unknown[]) => {
		console.error(`[${prefix}]`, ...args);
	}
};
