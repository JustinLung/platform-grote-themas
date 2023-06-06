import Tag from '$lib/components/Tag.svelte';
import type { Tags } from '$lib/graphql/generated/sdk';
import type { WerkvormFragment } from '$lib/graphql/generated/sdk';
import { derived, get, writable, type Writable } from 'svelte/store';

export const searchterm = writable('');
export const tag = writable('');

export const werkvormenStore: Writable<WerkvormFragment[]> = writable([]);

export const filteredWerkvormen = derived(
	[searchterm, tag, werkvormenStore],
	([$searchterm, $tag]) => {
		const werkvormenArr = get(werkvormenStore);
		return werkvormenArr.filter((werkvorm) => {
			const found =
				$searchterm !== ''
					? werkvorm.title.toLowerCase().includes(get(searchterm).toLowerCase())
					: true;

			const tagged = $tag !== '' ? werkvorm.tags.some((tag) => tag.waarde === $tag) : true;
			// console.log(tagged);

			return found && tagged;
		});
	}
);
