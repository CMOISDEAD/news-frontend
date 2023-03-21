<script lang="ts">
  import { fetch } from "$lib/app.axios";
  import { appStore } from "$lib/app.store";
  export let user: UserType;
  let post: PostType = {
    user_id: user.id,
    title: "",
    description: "",
    url: "",
    comments: [],
  };

  const handleClick = async () => {
    const response = await fetch().post("/posts/create");
    appStore.update(({ user }) => {
      return {
        posts: response.data,
        user: user,
      };
    });
  };
</script>

<div class="add">
  <div class="text-xl font-bold capitalize">add post</div>
  <form on:submit|preventDefault={handleClick}>
    <div class="inline-flex content-center items-end gap-4">
      <div class="w-[42.5vw]">
        <label for="title" class="block mb-2 text-sm capitalize"
          >post title</label
        >
        <input
          type="text"
          name="title"
          id="title"
          bind:value={post.title}
          class="block mb-2 p-2.5 w-full text-sm rounded-md border border-gray-300 focus:ring-primary focus:border-primary"
          placeholder="Write The Marvelous Title..."
          required
        />
      </div>
      <div class="w-[42.5vw]">
        <label for="url" class="block mb-2 text-sm capitalize">post URL</label>
        <input
          type="text"
          id="url"
          name="url"
          bind:value={post.url}
          class="block mb-2 p-2.5 w-full text-sm rounded-md border border-gray-300 focus:ring-primary focus:border-primary"
          placeholder="Write the Intersting URL..."
          required
        />
      </div>
      <button
        type="submit"
        class="text-white font-bold bg-primary hover:bg-primary-focus focus:ring-4 focus:ring-primary rounded-md text-sm px-5 py-2.5 mr-2 mb-2"
        >publish</button
      >
    </div>
    <label for="description" class="block mb-2 text-sm capitalize"
      >post content</label
    >
    <textarea
      id="description"
      name="description"
      bind:value={post.description}
      rows="1"
      class="block mb-2 p-2.5 w-full text-sm rounded-md border border-gray-300 focus:ring-primary focus:border-primary"
      placeholder="Write your idea here..."
      required
    />
  </form>
</div>
