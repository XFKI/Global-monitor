/**
 * Chinese A-share and HK markets store
 */

import { writable, derived } from 'svelte/store';
import type { MarketItem } from '$lib/types';

interface CnMarketsState {
	items: MarketItem[];
	loading: boolean;
	error: string | null;
	lastUpdated: number | null;
}

function createCnMarketsStore() {
	const { subscribe, update } = writable<CnMarketsState>({
		items: [],
		loading: false,
		error: null,
		lastUpdated: null
	});

	return {
		subscribe,

		setLoading(loading: boolean) {
			update((s) => ({ ...s, loading, error: loading ? null : s.error }));
		},

		setError(error: string | null) {
			update((s) => ({ ...s, loading: false, error }));
		},

		setItems(items: MarketItem[]) {
			update(() => ({ items, loading: false, error: null, lastUpdated: Date.now() }));
		}
	};
}

export const cnMarkets = createCnMarketsStore();

export const cnMarketsItems = derived(cnMarkets, ($s) => $s.items);
export const isCnMarketsLoading = derived(cnMarkets, ($s) => $s.loading);
