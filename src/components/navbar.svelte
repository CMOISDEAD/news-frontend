<script lang="ts">
  import { goto } from "$app/navigation";
  import { appStore } from "$lib/app.store";
  let user: UserType;
  appStore.subscribe((value) => {
    user = value.user as UserType;
  });
  const handleExit = () => {
    alert("See you next!!");
    appStore.update(({ posts }) => {
      return {
        user: {},
        posts,
      };
    });
    goto("/");
  };
</script>

<div
  class="bg-base-200 flex flex-row justify-between content-center items-center py-1 px-3 shadow-lg"
>
  <a class="text-xl font-bold" href="/">DoomNews</a>
  <div class="flex justify-center content-center gap-4">
    <a href="/">Home</a>
    <a href="/explore">Explore</a>
    {#if user.id}
      <div class="dropdown dropdown-end">
        <div tabindex="-1" class="hover:cursor-pointer">
          <div class="avatar indicator">
            <!-- <span class="indicator-item badge">1</span> -->
            <div class="w-7 h-7 rounded-md">
              <img
                src="https://avatars.githubusercontent.com/u/51010598?v=4"
                alt={`${user.username} profile pic`}
              />
            </div>
          </div>
        </div>
        <ul
          tabindex="-1"
          class="menu dropdown-content p-2 shadow bg-base-200 w-52 mt-4"
        >
          <div class="text-sm italic">
            Logged as: {user.username}
          </div>
          <div class="divider" />
          <ul class="menu">
            <button
              class="p-2 hover:bg-gray-200 rounded-md hover:cursor-pointer text-start"
            >
              options
            </button>
            <button
              class="p-2 hover:bg-gray-200 rounded-md hover:cursor-pointer text-start"
              on:click={handleExit}
            >
              exit
            </button>
          </ul>
        </ul>
      </div>
    {:else}
      <a href="/user/dashboard">sign up</a>{/if}
  </div>
</div>
