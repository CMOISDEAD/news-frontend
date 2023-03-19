<script lang="ts">
  import { onMount } from "svelte";
  import { store } from "$lib/app.store";
  import Addpost from "$components/addpost.svelte";
  import PostsList from "$components/postslist.svelte";
  import type { PageData } from "./$types";
  export let data: PageData;
  let posts: PostType[];

  store.subscribe((value) => {
    posts = value;
  });

  onMount(() => {
    store.set(data.posts);
  });
</script>

<svelte:head>
  <title>DoomNews</title>
</svelte:head>

<div class="content">
  <h1 class="text-3xl text-center font-bold">Welcome to Doom News</h1>
  <div class="text-md my-4">
    Hacker News (sometimes abbreviated as HN) is a social news website focusing
    on computer science and entrepreneurship. It is run by the investment fund
    and startup incubator Y Combinator. In general, content that can be
    submitted is defined as <span class="italic underline"
      >"anything that gratifies one's intellectual curiosity."</span
    ><br /> The word hacker in
    <span class="italic underline">"Hacker News"</span> is used in its original meaning
    and refers to the hacker culture which consists of people who enjoy tinkering
    with technology.
  </div>
  <Addpost />
  <div
    class="posts my-4 flex flex-row justify-between content-center items-center gap-1"
  >
    <PostsList {posts} title="top posts" />
    <PostsList {posts} title="new posts" />
    <PostsList {posts} title="dev posts" />
  </div>
</div>
