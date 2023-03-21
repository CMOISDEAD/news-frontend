import { fetch } from '$lib/app.axios';
import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
  const post_response = await fetch().post("/posts/get-post", { id: params.slug })
  const post: PostType = post_response.data;
  const user_response = await fetch().post("/users/get-user", { id: post.user_id })
  const user: UserType = user_response.data;
  return { post, user };
}) satisfies PageLoad;
