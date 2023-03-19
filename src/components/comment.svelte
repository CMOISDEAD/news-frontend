<script lang="ts">
  import type { CommentType, UserType } from "../types";
  export let comment: CommentType, level: number;
  const getUser = async (): Promise<UserType> => {
    const response = await fetch("http://localhost:3000/users/get-user", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: comment.user_id }),
    });
    return await response.json();
  };
  let user: Promise<UserType> = getUser();
</script>

{#await user}
  <div class="italic">loading...</div>
{:then value}
  <div
    class="px-2 py-1 border-l border-blue-500"
    style={`margin-left: ${level}rem;`}
  >
    <div class="content">
      {comment.content}
    </div>
    <div
      class="text-xs italic flex flex-row justify-start content-center items-center gap-2"
    >
      <div>100 points</div>
      <div class="text-blue-800">{value.username}</div>
      <div>5 hours ago</div>
      <div>comments: {comment.kids.length}</div>
    </div>
  </div>
{:catch error}
  <div class="text-red-500">{error.message}</div>
{/await}
