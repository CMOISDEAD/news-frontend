<script lang="ts">
  import { fetch } from "$lib/app.axios";
  import { goto } from "$app/navigation";
  import { appStore } from "$lib/app.store";
  let user: UserType = { id: 0, username: "", password: "", email: "" };
  const handleLogin = async () => {
    try {
      const response = await fetch().post("/users/register", user);
      appStore.update(({ posts }) => {
        return {
          user: response.data,
          posts,
        };
      });
      goto("/");
    } catch (e) {
      alert("invalid credentials try again");
    }
  };
</script>

<div class="form-control w-full max-w-xs">
  <div class="text-3xl font-bold tex-center">Register</div>
  <form on:submit|preventDefault={handleLogin}>
    <label class="label" for="username">
      <span class="label-text">What is your username?</span>
    </label>
    <input
      bind:value={user.username}
      id="username"
      type="text"
      placeholder="username"
      class="input input-bordered w-full max-w-xs"
      required
    />
    <label class="label" for="email">
      <span class="label-text">What is your email?</span>
    </label>
    <input
      bind:value={user.email}
      id="email"
      type="email"
      placeholder="email"
      class="input input-bordered w-full max-w-xs"
      required
    />
    <label class="label" for="password">
      <span class="label-text">Type your password</span>
    </label>
    <input
      bind:value={user.password}
      id="password"
      type="password"
      placeholder="password"
      class="input input-bordered w-full max-w-xs"
      required
    />
    <button type="submit" class="btn btn-primary w-full mt-3">Register</button>
  </form>
</div>
