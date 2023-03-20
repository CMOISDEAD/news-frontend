<script lang="ts">
  import { postsStore } from "$lib/app.store";
  import Comments from "$components/comments.svelte";
  import { comments } from "../../../utils/comments";
  import type { PageData } from "./$types";
  import { goto } from "$app/navigation";
  import moment from "moment";
  export let data: PageData;
  let post = data.post;
  let user = data.user;
  let comment: string;

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
    postsStore.set(newData);
    alert("post removed successfully");
    goto("/");
  };

  const handleAdd = async () => {};
</script>

<svelte:head>
  <title>{post.title} | DN</title>
</svelte:head>

<div>
  <div class="text-center">
    <div class="text-4xl font-bold">{post.title}</div>
    <div
      class="inline-flex justify-evenly content-center items-center gap-4 py-1"
    >
      <div class="text-sm">
        {`by `}<a class="italic hover:underline" href={`/user/${user.username}`}
          >{user.username}</a
        >
        created {moment(post.created_at).fromNow()}
      </div>
      <div class="buttons">
        <button
          class="btn btn-xs btn-error hover:text-base-100"
          on:click={handleDelete}
        >
          remove
        </button>
        <button class="btn btn-xs btn-success hover:text-base-100">
          save
        </button>
      </div>
    </div>
  </div>
  <div class="content">
    <div>{post.description}</div>
    <div>
      URL: <a class="underline" href={post.url} target="_blank">{post.url}</a>
    </div>
  </div>
  <div class="divider" />
  <div class="comments">
    <div class="text-3xl font-bold">Comments</div>
    <div class="my-2 flex flex-col gap-2">
      <!-- <Comments comments={post.comments} /> -->
      <form
        class="flex flex-row justify-between content-center items-center gap-2"
        on:submit|preventDefault={handleAdd}
      >
        <textarea
          name="comment"
          id="comment"
          class="textarea textarea-bordered textarea-xs w-full"
          placeholder="What do you think?"
          bind:value={comment}
          required
        />
        <button class="btn btn-primary">add</button>
      </form>
      <Comments {comments} />
    </div>
  </div>
</div>
