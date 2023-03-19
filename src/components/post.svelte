<script lang="ts">
  export let post: PostType;
</script>

<a
  class="border border-neutral-300 rounded-sm bg-neutral-100 px-5 py-1 hover:border-blue-500 hover:bg-neutral-200 group w-full"
  href={`/posts/${post.id}`}
>
  <div
    class="title font-bold capitalize group-hover:underline group-hover:text-blue-500"
  >
    {post.title}
  </div>
  <div class="text-sm">{post.description}</div>
  <div class="flex justify-start content-center items-center text-xs gap-2">
    <div>383 points</div>
    <div class="underline">{post.url}</div>
    <div>8 hours ago</div>
  </div>
</a>
