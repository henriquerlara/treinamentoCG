<template>
  <div class="container mt-5">
    <h2>Add New Record</h2>
    <form @submit.prevent="handleSubmit">
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input v-model="formData.name" type="text" class="form-control" id="name" required />
      </div>
      <div class="mb-3">
        <label for="company" class="form-label">Company</label>
        <input v-model="formData.company" type="text" class="form-control" id="company" required />
      </div>
      <div class="mb-3">
        <label for="age" class="form-label">Age</label>
        <input v-model="formData.age" type="number" class="form-control" id="age" required />
      </div>
      <div class="mb-3">
        <label for="registered" class="form-label">Registered</label>
        <input v-model="formData.registered" type="date" class="form-control" id="registered" required />
      </div>
      <div class="form-check mb-3">
        <input v-model="formData.isActive" type="checkbox" class="form-check-input" id="isActive" />
        <label for="isActive" class="form-check-label">Active</label>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

interface FormData {
  isActive: boolean;
  name: string;
  company: string;
  age: number;
  registered: string;
}

export default defineComponent({
  name: 'FormPage',
  setup() {
    const router = useRouter();
    const formData = reactive<FormData>({
      isActive: false,
      name: '',
      company: '',
      age: 0,
      registered: '',
    });

    const handleSubmit = async () => {
      try {
        await axios.post('http://localhost:5000/api/users/mypost', formData);
        router.push({ name: 'GridPage' });
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    };

    return {
      formData,
      handleSubmit,
    };
  },
});
</script>

<style scoped>
.container {
  margin-top: 20px;
}
</style>
