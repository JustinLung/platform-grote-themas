import { kitClient } from '$lib/graphql/client';

export function load() {
	const werkvormen = kitClient.HomePage();
	return { werkvormen };
}
