<template>
  <div class="container mt-5">
    <h1>Hello World</h1>
    <router-link to="/grid" class="btn btn-primary">Go to Grid</router-link>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>

<style scoped>
.container {
  margin-top: 20px;
}
</style>
