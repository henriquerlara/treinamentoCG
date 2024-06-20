<template>
  <div class="container mt-5">
    <router-link to="/form" class="btn btn-primary mb-3">Add New Record</router-link>
    <ConsulteGrid :name="'testGrid'" :columns="columns" :data-source="dataSource" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  ConsulteGrid,
  ConsulteGridColumnsModel,
  DataSource,
} from "consulte-framework-vue/components/grid";
import axios from "axios";

interface RowData {
  isActive: boolean;
  name: string;
  company: string;
  age: number;
  registered: string;
}

class CustomDataSource extends DataSource<RowData> {
  load() {
    return axios.get('http://localhost:5000/api/users/dados')
      .then(response => {
        const data: RowData[] = response.data;
        return data;
      });
  }
}

export default defineComponent({
  name: "GridPage",
  components: {
    ConsulteGrid,
  },
  data() {
    return {
      columns: [
        { text: "Active", align: "center", datafield: "isActive", filterable:true },
        { text: "Name", align: "center", datafield: "name", filterable:true },
        { text: "Company", align: "center", datafield: "company", filterable:true },
        { text: "Age", align: "center", datafield: "age" },
        { text: "Registered", align: "center", datafield: "registered", columntype: "date"},
      ] as ConsulteGridColumnsModel[],
      dataSource: new CustomDataSource(0, 10, 0, 0, []),
    };
  },
  mounted() {
      this.dataSource.load().then((rows) => {
      this.dataSource.rows = rows;
      this.dataSource.calculateNumberOfPages();
    });
  },
});
</script>

<style scoped>
.container {
  margin-top: 20px;
}
</style>
