import type { PageLoad } from './$types';

export const load = (async ({ fetch }) => {
  const post_res = await fetch("http://localhost:3000/posts/all");
  const posts = await post_res.json();
  return { posts };
}) satisfies PageLoad;
