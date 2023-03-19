<script>
  import "../app.css";
  import Navbar from "$components/navbar.svelte";
</script>

<Navbar />
<div class="container mx-auto mt-5">
  <slot />
</div>
