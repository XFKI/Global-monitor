/**
 * Language store - manages UI language (en / zh)
 * Persists to localStorage
 */

import { writable, derived } from 'svelte/store';
import { browser } from '$app/environment';
import { translations, type Lang } from '$lib/i18n';

const STORAGE_KEY = 'ui-lang';

function getInitialLang(): Lang {
	if (!browser) return 'en';
	const stored = localStorage.getItem(STORAGE_KEY);
	return stored === 'zh' ? 'zh' : 'en';
}

/** Current language: 'en' | 'zh' */
export const lang = writable<Lang>(getInitialLang());

// Persist to localStorage on change
lang.subscribe((value) => {
	if (browser) {
		localStorage.setItem(STORAGE_KEY, value);
	}
});

/** Toggle between English and Chinese */
export function toggleLang(): void {
	lang.update((l) => (l === 'en' ? 'zh' : 'en'));
}

/** Derived translation dictionary for current language */
export const tr = derived(lang, ($lang) => translations[$lang]);
