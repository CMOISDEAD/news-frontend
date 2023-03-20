<script lang="ts">
  import Comment from "./comment.svelte";
  export let comments: CommentType[] = [];
  export let level = 0;
</script>

{#each comments as comment}
  {#if comment.hasOwnProperty("kids") && comment.kids.length > 0}
    <div
      class="px-2 py-1 border-l border-primary mt-2"
      style={`margin-left: ${level}px;`}
    >
      <Comment {comment} {level} />
      <svelte:self comments={comment.kids} level={level + 3} />
    </div>
  {:else}
    <div
      class="px-2 py-1 border-l border-primary mt-2"
      style={`margin-left: ${level}px;`}
    >
      <Comment {comment} {level} />
    </div>
  {/if}
{:else}
  <div class="text-center italic">This place looks so alone...</div>
{/each}
