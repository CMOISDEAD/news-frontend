import type { PageLoad } from './$types';

export const load = (async ({ fetch, params }) => {
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
  const post_res = await fetch("http://www.localhost:3000/posts/get-post", {
    method: 'POST', headers, body: JSON.stringify({ id: params.slug }),
  });
  const post = await post_res.json();
  const user_res = await fetch("http://www.localhost:3000/users/get-user", {
    method: 'POST', headers, body: JSON.stringify({ id: post.user_id }),
  });
  const user = await user_res.json();
  return { post, user };
}) satisfies PageLoad;
