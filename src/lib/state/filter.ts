import type { TagFragment, WerkvormFragment } from '$lib/graphql/generated/sdk';
import { derived, get, writable, type Writable } from 'svelte/store';

export const searchterm = writable('');
export const tags: Writable<TagFragment[]> = writable([]);

export const werkvormenStore: Writable<WerkvormFragment[]> = writable([]);

export const filteredWerkvormen = derived(
	[searchterm, tags, werkvormenStore],
	([$searchterm, $tags]) => {
		const werkvormenArr = get(werkvormenStore);
		return werkvormenArr.filter((werkvorm) => {
			const found =
				$searchterm !== ''
					? werkvorm.title.toLowerCase().includes(get(searchterm).toLowerCase())
					: true;

			const tagged = $tags.length
				? werkvorm.tags.some((tag) => $tags.map((t) => t.waarde).includes(tag.waarde))
				: true;
			return found && tagged;
		});
	}
);
