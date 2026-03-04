/**
 * API Configuration
 */

import { browser } from '$app/environment';

// ============================================================================
// API Keys
// ============================================================================

/**
 * Finnhub API key — get a free key at https://finnhub.io/ (60 calls/min)
 */
export const FINNHUB_API_KEY = browser
	? (import.meta.env?.VITE_FINNHUB_API_KEY ?? '')
	: (process.env.VITE_FINNHUB_API_KEY ?? '');

export const FINNHUB_BASE_URL = 'https://finnhub.io/api/v1';

/**
 * FRED API key — get a free key at https://fred.stlouisfed.org/docs/api/api_key.html (unlimited)
 */
export const FRED_API_KEY = browser
	? (import.meta.env?.VITE_FRED_API_KEY ?? '')
	: (process.env.VITE_FRED_API_KEY ?? '');

export const FRED_BASE_URL = 'https://api.stlouisfed.org/fred';

// ============================================================================
// Logging
// ============================================================================

const isDev = browser ? (import.meta.env?.DEV ?? false) : false;

/**
 * Debug/logging configuration
 */
export const DEBUG = {
	enabled: isDev,
	logApiCalls: isDev,
	logCacheHits: false
} as const;

/**
 * Conditional logger — only logs in development
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

// ============================================================================
// CORS Proxy
// ============================================================================

/**
 * CORS proxy URLs for external API requests
 * Primary:   allorigins.win — works for most RSS feeds, no auth required
 * Secondary: corsproxy.io  — fallback (blocked by some news publishers)
 * Direct fetch is used as the last resort for CORS-enabled APIs (GDELT, Finnhub, FRED)
 */
export const CORS_PROXIES = {
	primary: 'https://api.allorigins.win/raw?url=',
	secondary: 'https://corsproxy.io/?url='
} as const;

/** Convenience alias pointing to the primary proxy */
export const CORS_PROXY_URL = CORS_PROXIES.primary;

/**
 * Fetch with CORS proxy cascade
 * Tries primary → secondary → direct fetch, returns first success
 */
export async function fetchWithProxy(url: string): Promise<Response> {
	const encodedUrl = encodeURIComponent(url);

	// 1. Primary proxy (allorigins.win)
	try {
		const response = await fetch(CORS_PROXIES.primary + encodedUrl, {
			signal: AbortSignal.timeout(12000)
		});
		if (response.ok) return response;
		logger.warn('API', `Primary proxy failed (${response.status}), trying secondary`);
	} catch (error) {
		logger.warn('API', 'Primary proxy error, trying secondary:', error);
	}

	// 2. Secondary proxy (corsproxy.io)
	try {
		const response = await fetch(CORS_PROXIES.secondary + encodedUrl, {
			signal: AbortSignal.timeout(12000)
		});
		if (response.ok) return response;
		logger.warn('API', `Secondary proxy failed (${response.status}), trying direct`);
	} catch (error) {
		logger.warn('API', 'Secondary proxy error, trying direct:', error);
	}

	// 3. Direct fetch — works for APIs that include CORS headers (GDELT, Finnhub, FRED)
	return fetch(url, { signal: AbortSignal.timeout(15000) });
}

// ============================================================================
// Rate Limiting & Caching
// ============================================================================

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
