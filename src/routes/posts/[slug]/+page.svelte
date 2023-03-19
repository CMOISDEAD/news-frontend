<script lang="ts">
  import { store } from "$lib/app.store";
  import Comments from "$components/comments.svelte";
  import { comments } from "../../../utils/comments";
  import type { PageData } from "./$types";
  import { goto } from "$app/navigation";
  export let data: PageData;
  let post = data.post;
  let user = data.user;

  const handleDelete = async () => {
    const opts = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: post.id }),
    };
    const response = await fetch(
      "http://www.localhost:3000/posts/remove",
      opts
    );
    const newData = await response.json();
    store.set(newData);
    goto("/");
  };
</script>

<svelte:head>
  <title>{post.title} | DN</title>
</svelte:head>

<div>
  <div class="text-center text-4xl font-bold">{post.title}</div>
  <div class="italic text-center">by {user.username}</div>
  <button
    class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 rounded-md text-sm px-5 py-2.5 mr-2 mb-2 w-fit"
    on:click={handleDelete}
  >
    remove
  </button>
  <div class="text-md">{post.description}</div>
  <div>
    link: <a class="underline" href={post.url} target="_blank">{post.url}</a>
  </div>
  <div class="text-3xl font-bold">Comments</div>
  <div class="my-2 flex flex-col gap-2">
    <!-- <Comments comments={post.comments} /> -->
    <Comments {comments} />
  </div>
</div>
