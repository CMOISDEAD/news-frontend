<script lang="ts">
  import Post from "./post.svelte";
  export let posts: PostType[];
  export let title: string;
</script>

<div class="posts flex flex-col gap-4 w-full">
  <div class="text-2xl font-bold capitalize">{title}</div>
  {#each posts as post}
    <Post {post} />
  {:else}
    <p>loading...</p>
  {/each}
</div>
