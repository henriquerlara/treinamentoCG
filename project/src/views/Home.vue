<template>
  <div class="container mt-5">
    <Header/>
    <h1>Hello World</h1>
    <p>oiiiii</p>
    <router-link to="/grid" class="btn btn-primary">Go to Grid</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/Header.vue";

export default defineComponent({
  name: "HomePage",
  data(){
    components: Header
  }
});
</script>

<style scoped>
.container {
  margin-top: 20px;
}
</style>
