import type { WerkvormFragment } from '$lib/graphql/generated/sdk';
import { derived, get, writable, type Writable } from 'svelte/store';

export const searchterm = writable('');

export const werkvormenStore: Writable<WerkvormFragment[]> = writable([]);

export const filteredWerkvormen = derived(searchterm, ($searchterm) => {
	const werkvormenArr = get(werkvormenStore);
	if (!$searchterm) return werkvormenArr;
	return werkvormenArr.filter((werkvorm) => {
		return werkvorm.title.toLowerCase().includes(get(searchterm));
	});
});
