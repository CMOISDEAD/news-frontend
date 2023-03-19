<script lang="ts">
  import Comment from "./comment.svelte";
  export let comments: CommentType[] = [];
  export let level = 0;
</script>

{#each comments as comment}
  {#if comment.hasOwnProperty("kids") && comment.kids.length > 0}
    <Comment {comment} {level} />
    <svelte:self comments={comment.kids} level={level + 2} />
  {:else}
    <Comment {comment} {level} />
  {/if}
{:else}
  <div class="text-center italic">This place looks so alone...</div>
{/each}
