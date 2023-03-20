<script lang="ts">
  import { onMount } from "svelte";
  import type { PageData } from "./$types";
  import { postsStore, userStore } from "$lib/app.store";
  import Addpost from "$components/addpost.svelte";
  import PostsList from "$components/postslist.svelte";
  import Banner from "$components/banner.svelte";
  export let data: PageData;
  let posts: PostType[], user: UserType;
  postsStore.subscribe((value) => {
    posts = value;
  });
  userStore.subscribe((value) => {
    user = value;
  });
  onMount(() => {
    postsStore.set(data.posts);
  });
</script>

<svelte:head>
  <title>DoomNews</title>
</svelte:head>

<div class="content">
  <h1 class="text-3xl text-center font-bold">
    Welcome to <span class="underline decoration-primary">Doom News</span>
  </h1>
  <div class="text-md my-4">
    Hacker News (sometimes abbreviated as HN) is a social news website focusing
    on computer science and entrepreneurship. It is run by the investment fund
    and startup incubator Y Combinator. In general, content that can be
    submitted is defined as <span class="italic underline decoration-primary"
      >"anything that gratifies one's intellectual curiosity."</span
    ><br /> The word hacker in
    <span class="italic underline decoration-primary">"Hacker News"</span> is used
    in its original meaning and refers to the hacker culture which consists of people
    who enjoy tinkering with technology.
  </div>
  {#if user.id}
    <Addpost {user} />
  {:else}
    <Banner />
  {/if}
  <div
    class="posts my-4 flex flex-row justify-evenly content-center items-center gap-4 w-full"
  >
    <PostsList {posts} title="top posts" />
    <PostsList
      posts={[...posts].sort(
        (a, b) => Date.parse(`${b.created_at}`) - Date.parse(`${a.created_at}`)
      )}
      title="new posts"
    />
    <PostsList {posts} title="dev posts" />
  </div>
</div>
