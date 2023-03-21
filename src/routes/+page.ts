import type { PageLoad } from './$types';
import { fetch } from '$lib/app.axios';

export const load = (async () => {
  const response = await fetch().get("/posts/all")
  return { posts: response.data };
}) satisfies PageLoad;
