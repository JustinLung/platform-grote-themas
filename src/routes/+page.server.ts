import { kitClient } from '$lib/graphql/client';

export async function load() {
	const werkvormen = await kitClient.HomePage();
	return { werkvormen };
}
