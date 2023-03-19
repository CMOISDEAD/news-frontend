<script lang="ts">
  import { store } from "$lib/app.store";

  let post: PostType = {
    user_id: 1,
    title: "",
    description: "",
    url: "",
    comments: [],
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target as HTMLInputElement;
    post[name] = value;
  };

  const handleClick = async () => {
    const opts = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    };
    const response = await fetch(
      "http://www.localhost:3000/posts/create",
      opts
    );
    const newData = await response.json();
    store.set(newData);
  };
</script>

<div class="add">
  <div class="text-xl font-bold capitalize">add post</div>
  <div class="inline-flex content-center items-end gap-4">
    <div class="w-[42.5vw]">
      <label for="title" class="block mb-2 text-sm capitalize">post title</label
      >
      <input
        type="text"
        name="title"
        id="title"
        class="block mb-2 p-2.5 w-full text-sm rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
        placeholder="Write The Marvelous Title..."
        on:change={handleChange}
      />
    </div>
    <div class="w-[42.5vw]">
      <label for="url" class="block mb-2 text-sm capitalize">post URL</label>
      <input
        type="text"
        id="url"
        name="url"
        class="block mb-2 p-2.5 w-full text-sm rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
        placeholder="Write the Intersting URL..."
        on:change={handleChange}
      />
    </div>
    <button
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-md text-sm px-5 py-2.5 mr-2 mb-2"
      on:click={handleClick}>publish</button
    >
  </div>
  <label for="description" class="block mb-2 text-sm capitalize"
    >post content</label
  >
  <textarea
    id="description"
    name="description"
    rows="1"
    class="block mb-2 p-2.5 w-full text-sm rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
    placeholder="Write your idea here..."
    on:change={handleChange}
  />
</div>
