<script lang="ts">
  import { fetch } from "$lib/app.axios";
  export let comment: CommentType;
  const getUser = async (): Promise<UserType> => {
    const response = await fetch().post("/users/get-user", {
      id: comment.user_id,
    });
    return response.data;
  };
  let user: Promise<UserType> = getUser();
</script>

{#await user}
  <div class="italic">loading...</div>
{:then value}
  <div class="content">
    {comment.content}
  </div>
  <div
    class="text-xs italic flex flex-row justify-start content-center items-center gap-2"
  >
    <div>100 points</div>
    <div class="text-primary-focus">{value.username}</div>
    <div>5 hours ago</div>
    <div>comments: {comment.kids.length}</div>
  </div>
{:catch error}
  <div class="text-red-500">{error.message}</div>
{/await}
