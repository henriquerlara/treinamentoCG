<template>
    <div class="col-md-12">
      <ConsulteGrid :name="'testGrid'" :columns="columns" :data-source="dataSource" :actions="true" />
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { ConsulteGrid } from 'consulte-framework-vue';
  
  export default defineComponent({
    name: 'Grid',
    components: {
      ConsulteGrid
    },
    data() {
      return {
        columns: [
          { text: 'Active', align: 'center', datafield: 'isActive' },
          { text: 'Name', align: 'center', datafield: 'name' },
          { text: 'Company', align: 'center', datafield: 'company' },
          { text: 'Age', align: 'center', datafield: 'age' },
          { text: 'Registered', align: 'center', datafield: 'registered' }
        ],
        dataSource: {
          load() {
            return new Promise((resolve) => {
              setTimeout(() => {
                resolve([
                  { isActive: true, name: 'John Doe', company: 'Company A', age: 30, registered: '15/03/2020' },
                  { isActive: false, name: 'Jane Smith', company: 'Company B', age: 25, registered: '20/05/2019' },
                  { isActive: true, name: 'Peter Johnson', company: 'Company C', age: 40, registered: '10/12/2021' }
                ]);
              }, 1000);
            });
          }
        }
      };
    }
  });
  </script>
  
  <style>
  .col-md-12 {
    margin-top: 20px;
  }
  </style>
  