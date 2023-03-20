<script lang="ts">
  import moment from "moment";
  export let post: PostType;
</script>

<a
  class="border border-neutral-300 rounded-sm bg-neutral-100 px-5 py-1 hover:border-primary hover:bg-neutral-200 w-full h-20 group"
  href={`/posts/${post.id}`}
>
  <div
    class="title font-bold capitalize group-hover:underline group-hover:text-primary truncate"
  >
    {post.title}
  </div>
  <div class="text-sm group-hover:text-primary-focus truncate">
    {post.description}
  </div>
  <div
    class="flex justify-start content-center items-center text-xs gap-2 group-hover:text-primary-focus"
  >
    <div>383 points</div>
    <div class="underline truncate w-2/4">{post.url}</div>
    <div>
      {moment(post.created_at).fromNow()}
    </div>
  </div>
</a>
