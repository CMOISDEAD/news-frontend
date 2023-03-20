<script>
  import Login from "$components/login.svelte";
  import Register from "$components/register.svelte";
</script>

<svelte:head>
  <title>Dashboard | DN</title>
</svelte:head>

<div
  class="flex flex-row justify-evenly content-center items-center gap-4 mt-40 place-items-center"
>
  <Login />
  <div class="divider lg:divider-horizontal">OR</div>
  <Register />
</div>
